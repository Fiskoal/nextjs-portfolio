import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Hi, I'm <span className={styles.name}>Jakob Knicley</span></h1>
      <h1 className={styles.title}>I am a Full Stack Web Developer</h1>
      <Link href="/work">
        <a className={styles.btn}>View My Work</a>
      </Link>
    </div>
  )
}
