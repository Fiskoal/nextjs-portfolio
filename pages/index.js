import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>Jakob Knicley</span>
          <br></br>
          I am a Full Stack Web Developer
        </h1>
        <Link href="/work">
          <a className={styles.btn}>View My Work</a>
        </Link>
      </div>
    </div>
  );
}
