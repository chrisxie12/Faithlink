import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  const email = user?.email ?? ''
  const initial = email.charAt(0).toUpperCase() || '?'

  async function handleLogout() {
    setError(null)
    try {
      await logout()
      navigate('/')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign out.')
    }
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <span className={styles.logoMark}>F</span>
          Faithlink
        </Link>
        <div className={styles.account}>
          <span className={styles.avatar} aria-hidden="true">
            {initial}
          </span>
          <span className={styles.email}>{email}</span>
          <button className={styles.signOut} type="button" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <p className={styles.eyebrow}>Dashboard</p>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.subtitle}>
            You are signed in as <strong>{email}</strong>.
          </p>
        </section>

        <section className={styles.panel}>
          <span className={styles.panelIcon} aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
            </svg>
          </span>
          <h2 className={styles.panelTitle}>Your dashboard is coming soon</h2>
          <p className={styles.panelBody}>
            This is where your community updates will appear. We are building it
            out — check back soon.
          </p>
        </section>

        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : (
          <p className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            Signed in securely with Firebase
          </p>
        )}
      </main>
    </div>
  )
}
