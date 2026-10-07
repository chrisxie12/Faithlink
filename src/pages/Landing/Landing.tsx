import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.logo}>Faithlink</span>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/login">
            Log in
          </Link>
          <Link className={`${styles.navLink} ${styles.navLinkPrimary}`} to="/signup">
            Sign up
          </Link>
        </nav>
      </header>

      <main className={styles.hero}>
        <h1 className={styles.title}>Stay connected with your community</h1>
        <p className={styles.subtitle}>
          Faithlink is a simple place for your community to stay in touch. Create an
          account or log in to get started.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/signup">
            Get started
          </Link>
          <Link className={styles.secondaryButton} to="/login">
            I already have an account
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>Faithlink</footer>
    </div>
  )
}
