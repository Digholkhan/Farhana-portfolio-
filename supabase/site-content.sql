create table if not exists public.site_content (
  id text primary key default 'default',
  content jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

drop policy if exists "Public can read site content" on public.site_content;
create policy "Public can read site content"
  on public.site_content for select
  using (true);

drop policy if exists "Owner can manage site content" on public.site_content;
create policy "Owner can manage site content"
  on public.site_content for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'owner')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'owner');

insert into public.site_content (id, content)
values ('default', '{}'::jsonb)
on conflict (id) do nothing;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  excerpt text,
  content text,
  cover_image_url text,
  slug text unique,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;

drop policy if exists "Public can read published posts" on public.posts;
create policy "Public can read published posts"
  on public.posts for select
  using (status = 'published');

drop policy if exists "Owner can manage posts" on public.posts;
create policy "Owner can manage posts"
  on public.posts for all
  to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'owner')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'owner');



update auth.users
set raw_app_meta_data =
  coalesce(raw_app_meta_data, '{}'::jsonb)
  || '{"role":"owner"}'::jsonb
where email = 'ashafarhana25@gmail.com';