import Image from "next/image";
import me2 from "../public/me2.jpg";
import {
  Css3,
  Cypress,
  Html5,
  Javascript,
  Jest,
  Nextdotjs,
  React,
  Sass,
  Typescript,
} from "../components/icons/index";
import styles from "../styles/Home.module.scss";
import Meta from "../components/meta/meta";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta title="About">
        <meta name="description" content="Created by Matt Rideout" />
      </Meta>
      <section className={styles.heroContainer}>
        <h1>
          Hello, my name is Matt. I am a Front End Developer living in Bridgend,
          Wales.
        </h1>
      </section>
      <section className={styles.imageContainer}>
        <Image
          height={400}
          width={900}
          className={styles.image}
          src={me2}
          alt="image of matt"
        />
      </section>
      <section className={styles.aboutContainer}>
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio! I'm a passionate and dedicated front-end
          developer with over two years of experience in the software
          development industry. My journey in tech began with a spark of
          curiosity and has flourished into a career driven by a love for
          innovation and continuous learning.
        </p>
        <h3>Technical Expertise</h3>
        <p>
          At the core of my technical skill set is a solid foundation in React,
          Next.js, and Typescript. I have honed my craft in developing intuitive
          and responsive user interfaces, ensuring seamless user experiences. My
          toolkit extends to advanced technologies like Material UI for sleek
          and modern designs, Docker for containerization, and an array of
          testing tools such as Selenium, Webdriver IO, and the React Testing
          Library, with a particular proficiency in Jest for unit testing. A
          significant aspect of my expertise is my adeptness with Git. My
          experience with version control using Git has been instrumental in
          maintaining code quality, collaborating efficiently with teams, and
          effectively managing multiple project versions.
        </p>
        <h3>Approach To Work</h3>
        <p>
          I thrive in agile environments, actively engaging in stand-ups, sprint
          refinements, and retrospectives. My ability to remain highly focused
          on tasks while being adaptable to context switches is a testament to
          my versatile work style. I'm a hardworking individual who balances a
          keen focus on detailed tasks with the agility to shift gears as
          project demands evolve.
        </p>
        <h3>Learning and Growth</h3>
        <p>
          In and outside of work I have strong motivation to improve my skill
          sets and keep up to date with the latest technologies, always looking
          for ways in which I can expand my technical knowledge. I am looking to
          join a team of developers that will help me to grow as a developer.
          Everything I have learned so far has been self taught with some
          mentoring from friends who work in the industry.Currently, I'm
          deepening my understanding of web accessibility, driven by a belief
          that technology should be inclusive and accessible to all.
        </p>
        <h3>Skills</h3>
        <div className={styles.skills}>
          <Html5 />
          <Css3 />
          <Sass />
          <Javascript />
          <Typescript />
          <React />
          <Nextdotjs />
          <Jest />
        </div>
      </section>
    </div>
  );
}
