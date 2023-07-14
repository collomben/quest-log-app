import Image from 'next/image'
import styles from './page.module.css'

export default function Home()
{
  return (
    <main className={styles.main}>
      <h1>Welcome to your Quest Log</h1>
      <div className={styles.stacked}>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <div className={styles.flexRow}>
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </div>
    </main>
  )
}
