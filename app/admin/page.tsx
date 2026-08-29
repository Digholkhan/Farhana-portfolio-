'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase-client';

type Post = {
  id: string;
  title: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  cover_image_url?: string;
  status: 'draft' | 'published';
  published_at?: string;
};

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError('Add your Supabase credentials in .env.local before using the admin area.');
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(Boolean(data.session));
      if (data.session) {
        loadPosts();
      }
    });
  }, []);

  const loadPosts = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;

    const { data } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
    setPosts(data ?? []);
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const supabase = getSupabaseClient();
    if (!supabase) {
      setError('Supabase is not configured yet.');
      setLoading(false);
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    setIsLoggedIn(true);
    setLoading(false);
    await loadPosts();
  };

  const handleCreatePost = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const supabase = getSupabaseClient();
    if (!supabase) {
      setError('Supabase is not configured yet.');
      setLoading(false);
      return;
    }

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const { error: insertError } = await supabase.from('posts').insert({
      title,
      slug,
      excerpt,
      content,
      cover_image_url: coverImageUrl,
      status,
      published_at: status === 'published' ? new Date().toISOString() : null,
    });

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
      return;
    }

    setTitle('');
    setExcerpt('');
    setContent('');
    setCoverImageUrl('');
    setStatus('draft');
    setLoading(false);
    await loadPosts();
  };

  const handleLogout = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setPosts([]);
  };

  return (
    <main style={{ minHeight: '100vh', background: '#050307', color: '#fff', padding: '40px 20px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ margin: 0 }}>Farhana Asha Admin</h1>
          <Link href="/" style={{ color: '#c4b5fd' }}>Back to site</Link>
        </div>

        {!isLoggedIn ? (
          <form onSubmit={handleLogin} style={{ maxWidth: 540, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28 }}>
            <h2 style={{ marginTop: 0 }}>Login</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Use your Supabase admin account to manage content.</p>

            <div style={{ display: 'grid', gap: 16 }}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'white' }}
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'white' }}
              />
              <button type="submit" disabled={loading} style={{ padding: '14px 18px', borderRadius: 12, border: 'none', background: '#c4b5fd', color: '#08040d', fontWeight: 700 }}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        ) : (
          <div style={{ display: 'grid', gap: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 18, padding: 20 }}>
              <strong>Admin session active</strong>
              <button onClick={handleLogout} style={{ padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.12)', background: 'transparent', color: '#fff' }}>
                Logout
              </button>
            </div>

            <form onSubmit={handleCreatePost} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24, display: 'grid', gap: 16 }}>
              <h2 style={{ margin: 0 }}>Create a post</h2>

              <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'white' }} />
              <input value={coverImageUrl} onChange={(e) => setCoverImageUrl(e.target.value)} placeholder="Cover image URL" style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'white' }} />
              <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Short excerpt" rows={3} style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'white' }} />
              <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Full content" rows={6} style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'white' }} />

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <select value={status} onChange={(e) => setStatus(e.target.value as 'draft' | 'published')} style={{ padding: '14px 16px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)', color: 'white' }}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>

                <button type="submit" disabled={loading} style={{ padding: '14px 18px', borderRadius: 12, border: 'none', background: '#c4b5fd', color: '#08040d', fontWeight: 700 }}>
                  {loading ? 'Saving...' : 'Save post'}
                </button>
              </div>
            </form>

            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 24 }}>
              <h2 style={{ marginTop: 0 }}>Published content</h2>
              {posts.length === 0 ? <p>No posts yet.</p> : (
                <div style={{ display: 'grid', gap: 12 }}>
                  {posts.map((post) => (
                    <div key={post.id} style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: 16 }}>
                      <div style={{ color: '#c4b5fd', fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{post.status}</div>
                      <h3 style={{ margin: '8px 0' }}>{post.title}</h3>
                      <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)' }}>{post.excerpt || post.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {error ? <div style={{ marginTop: 20, color: '#fca5a5' }}>{error}</div> : null}
      </div>
    </main>
  );
}
