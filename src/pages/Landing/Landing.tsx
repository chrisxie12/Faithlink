import { Link } from 'react-router-dom'
import styles from './Landing.module.css'

const steps = [
  {
    number: '01',
    title: 'Create an account',
    body: 'Sign up with your email and password. It takes less than a minute.',
  },
  {
    number: '02',
    title: 'Sign in securely',
    body: 'Authentication is handled by Firebase, so your credentials stay private.',
  },
  {
    number: '03',
    title: 'Open your dashboard',
    body: 'Your personal space in the community — with more on the way.',
  },
]

export default function Landing() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <span className={styles.logoMark}>F</span>
          Faithlink
        </Link>
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/login">
            Log in
          </Link>
          <Link className={`${styles.navLink} ${styles.navLinkPrimary}`} to="/signup">
            Sign up
          </Link>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A place for your community</p>
            <h1 className={styles.title}>
              Stay connected with your <span className={styles.titleAccent}>community</span>
            </h1>
            <p className={styles.subtitle}>
              Faithlink keeps your community in one place. Create an account in
              seconds, sign in securely, and pick up right where you left off —
              on any device.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} to="/signup">
                Get started
              </Link>
              <Link className={styles.secondaryButton} to="/login">
                I already have an account
              </Link>
            </div>
            <p className={styles.note}>Free to join · Email and password · No downloads</p>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.mock}>
              <div className={styles.mockBar}>
                <span className={styles.mockDot} />
                <span className={styles.mockDot} />
                <span className={styles.mockDot} />
                <span className={styles.mockLabel}>faithlink.app</span>
              </div>
              <div className={styles.mockBody}>
                <p className={styles.mockHeading}>Welcome back</p>
                <span className={styles.mockField} />
                <span className={styles.mockField} />
                <span className={styles.mockButton} />
                <span className={styles.mockLine} />
                <span className={styles.mockLine} />
                <span className={styles.mockLineShort} />
              </div>
            </div>
            <div className={styles.glow} />
          </div>
        </section>

        <section className={styles.steps}>
          <h2 className={styles.sectionTitle}>How it works</h2>
          <ol className={styles.stepList}>
            {steps.map((step) => (
              <li className={styles.step} key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to join?</h2>
          <p className={styles.ctaBody}>
            Create your account and see your dashboard in a couple of clicks.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} to="/signup">
              Create an account
            </Link>
            <Link className={styles.secondaryButton} to="/login">
              Log in
            </Link>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerLogo}>Faithlink</span>
        <nav className={styles.footerNav}>
          <Link className={styles.footerLink} to="/login">
            Log in
          </Link>
          <Link className={styles.footerLink} to="/signup">
            Sign up
          </Link>
        </nav>
      </footer>
    </div>
  )
}
