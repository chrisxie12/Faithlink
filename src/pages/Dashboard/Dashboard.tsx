import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import styles from './Dashboard.module.css'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

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
        <span className={styles.logo}>Faithlink</span>
        <div className={styles.account}>
          <span className={styles.email}>{user?.email}</span>
          <button className={styles.signOut} type="button" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome back</h1>
        <p className={styles.subtitle}>
          You are logged in as <strong>{user?.email}</strong>.
        </p>

        <section className={styles.placeholder}>
          <p>Your dashboard is coming soon.</p>
        </section>

        {error ? (
          <p className={styles.error} role="alert">
            {error}
          </p>
        ) : null}
      </main>
    </div>
  )
}
