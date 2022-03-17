import styles from "../../styles/Home.module.css";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <h1>About Me</h1>
        <p>
          Full Stack Web Developer with a background in Production Operations.
          Quick and eager learner who is technically proficient and can
          understand and explain complex concepts. Skilled in critical thinking,
          writing clean, scalable code, and organizing large problems into more
          manageable steps. Understands the importance of a positive mindset,
          taking initiative in order to find solutions, and always staying open
          minded to direction.
        </p>
      </div>
    </div>
  );
};

export default About;
