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
        <h3>About</h3>
        <p>
          I am a highly focused and driven individual that has just over two
          years experience in front-end development. I am a self-motivated,
          organised and committed individual, with the ability to work well
          independently or as part of a team. I have a good knowledge and
          understanding of HTML, CSS(SASS) and JavaScript/Typescript and possess
          a good understanding libraries such as React. I have experience
          writing unit tests for React using Jest and I have some experience
          with Cypress for end-to-end testing. As you can see from my projects,
          I have experience with git / version control. I have some knowledge of
          the foundations of web accessibility and will be looking to improve my
          skills in this area.
        </p>
        <p>
          In and outside of work I have strong motivation to improve my skill
          sets and keep up to date with the latest technologies, always looking
          for ways in which I can expand my technical knowledge. I am looking to
          join a team of developers that will help me to grow as a developer.
          Everything I have learned so far has been self taught with some
          mentoring from friends who work in the industry.
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
          <Cypress />
          <Jest />
        </div>
      </section>
    </div>
  );
}
