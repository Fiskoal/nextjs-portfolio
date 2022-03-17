import styles from "../../styles/Home.module.css";
import Link from "next/link";

const Skills = () => {
  return (
    <div className={styles.main}>
      <div className={styles.center}>
        <h1>Skills</h1>
        <p>
          Languages: HTML5, CSS3, JavaScript ES6+, C# 
          <br></br>
          Technologies: jQuery, Bootstrap, Node, Tailwind, Express, React,
          Handlebars, MongoDB, MySQL, SQL Server, RESTful APIs, PWAs, Google
          Cloud Computing
          <br></br>
          Concepts: Mobile-First Design, Data Structures, User Authentication,
          Unit Testing, Debugging
        </p>
      </div>
    </div>
  );
};

export default Skills;
