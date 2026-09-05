'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { getSupabaseClient } from '@/lib/supabase-client';
import { defaultSiteContent, mergeSiteContent, SiteContent } from '@/lib/site-content';

const editorSections: Array<{ key: keyof SiteContent; label: string }> = [
  { key: 'education', label: 'Education & Experience' },
  { key: 'services', label: '01 — Core Capabilities' },
  { key: 'portfolio', label: '02 — Selected Case Studies' },
  { key: 'philosophy', label: '03 — Editorial Manifesto' },
  { key: 'testimonials', label: '05 — Client Praise' },
  { key: 'contact', label: "06 — Let's Collaborate" },
];

export default function AdminPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [content, setContent] = useState<SiteContent>(defaultSiteContent);
  const [activeSection, setActiveSection] = useState<keyof SiteContent>('education');
  const [editorValue, setEditorValue] = useState(JSON.stringify(defaultSiteContent.education, null, 2));
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError('Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local.');
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(Boolean(data.session));
      if (data.session) loadContent();
    });
  }, []);

  const loadContent = async () => {
    const supabase = getSupabaseClient();
    if (!supabase) return;
    const { data, error: loadError } = await supabase
      .from('site_content')
      .select('content')
      .eq('id', 'default')
      .maybeSingle();
    if (loadError) {
      setError(
        loadError.code === 'PGRST205'
          ? 'The site_content table is missing. Run supabase/site-content.sql in the Supabase SQL Editor.'
          : loadError.message,
      );
      return;
    }
    const contentRow = data as { content?: unknown } | null;
    const nextContent = mergeSiteContent(contentRow?.content);
    setContent(nextContent);
    setEditorValue(JSON.stringify(nextContent[activeSection], null, 2));
  };

  const selectSection = (key: keyof SiteContent) => {
    setActiveSection(key);
    setEditorValue(JSON.stringify(content[key], null, 2));
    setMessage('');
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
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) setError(signInError.message);
    else {
      setIsLoggedIn(true);
      await loadContent();
    }
    setLoading(false);
  };

  const handleSave = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    let sectionValue: SiteContent[typeof activeSection];
    try {
      sectionValue = JSON.parse(editorValue) as SiteContent[typeof activeSection];
    } catch {
      setError('The section must contain valid JSON.');
      setLoading(false);
      return;
    }
    const nextContent = { ...content, [activeSection]: sectionValue };
    const supabase = getSupabaseClient();
    if (!supabase) {
      setError('Supabase is not configured yet.');
      setLoading(false);
      return;
    }
    const contentPayload = {
      id: 'default',
      content: nextContent,
      updated_at: new Date().toISOString(),
    };
    const { error: saveError } = await supabase.from('site_content').upsert(contentPayload as never);
    if (saveError) {
      setError(
        saveError.code === '42501'
          ? 'You are signed in, but this account is not an owner. Set app_metadata.role to owner in Supabase, then sign out and sign in again.'
          : saveError.code === 'PGRST205'
          ? 'The site_content table is missing. Run supabase/site-content.sql in the Supabase SQL Editor, then refresh this page.'
          : saveError.message,
      );
    }
    else {
      setContent(nextContent);
      setMessage(`${editorSections.find((section) => section.key === activeSection)?.label} saved.`);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    const supabase = getSupabaseClient();
    if (supabase) await supabase.auth.signOut();
    setIsLoggedIn(false);
  };

  return (
    <main className="admin-shell">
      <div className="admin-orbit admin-orbit-one" />
      <div className="admin-orbit admin-orbit-two" />
      {!isLoggedIn ? (
        <form className="admin-login-card" onSubmit={handleLogin}>
          <Link href="/" className="admin-back-link">Back to portfolio</Link>
          <span className="admin-kicker">Private studio</span>
          <h1 className='!text-4xl'>Welcome back.</h1>
          <p>Sign in to shape the words behind the work.</p>
          <label>Email<input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="you@example.com" /></label>
          <label>Password<input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required placeholder="Your password" /></label>
          <button className="admin-primary-button" type="submit" disabled={loading}>{loading ? 'Opening studio...' : 'Enter studio'}</button>
          {error ? <div className="admin-error">{error}</div> : null}
        </form>
      ) : (
        <section className="admin-workspace">
          <header className="admin-header">
            <div><span className="admin-kicker">Private studio</span><h1>Portfolio content</h1></div>
            <div className="admin-header-actions"><Link href="/">View site</Link><button className="admin-quiet-button" onClick={handleLogout}>Log out</button></div>
          </header>
          <div className="admin-editor-grid">
            <aside className="admin-section-list">
              <span className="admin-label">Edit a section</span>
              {editorSections.map((section) => <button type="button" key={section.key} className={activeSection === section.key ? 'active' : ''} onClick={() => selectSection(section.key)}>{section.label}<span>→</span></button>)}
            </aside>
            <form className="admin-editor-card" onSubmit={handleSave}>
              <div className="admin-editor-heading"><div><span className="admin-kicker">JSON content record</span><h2>{editorSections.find((section) => section.key === activeSection)?.label}</h2></div><span className="admin-status">Supabase sync</span></div>
              <textarea value={editorValue} onChange={(event) => setEditorValue(event.target.value)} spellCheck={false} aria-label="Section JSON content" />
              <div className="admin-editor-footer"><span>Arrays control repeatable items such as services, education, and testimonials.</span><button className="admin-primary-button" type="submit" disabled={loading}>{loading ? 'Saving...' : 'Save changes'}</button></div>
              {message ? <div className="admin-success">{message}</div> : null}
              {error ? <div className="admin-error">{error}</div> : null}
            </form>
          </div>
        </section>
      )}
    </main>
  );
}
