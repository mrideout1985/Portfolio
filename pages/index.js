import Head from 'next/head'
import Image from 'next/image'
import me2 from "../public/me2.jpg"
import { Css3, Cypress, Html5, Javascript, Jest, Nextdotjs, React, Sass, Typescript, Vite } from '../components/icons/index'
import styles from '../styles/Home.module.scss'

export default function Home() {



  return (
    <div className={styles.container}>
      <section className={styles.heroContainer}><h1>Hello, my name is Matt. I am a Front End Developer living in Bridgend, Wales.</h1></section>
      <section className={styles.imageContainer}>
        <Image height={400} width={900} className={styles.image} src={me2} alt="image of matt" />
      </section>
      <section className={styles.aboutContainer}>
        <h3>About</h3>
        <p>I am a highly focused and driven individual that has just over two years experience in
          front-end development. I am a self-motivated, organised and committed individual, with the
          ability to work well independently or as part of a professional development team. I have a firm knowledge
          and understanding of HTML, CSS(SASS) and JavaScript and possess a good understanding of libraries
          such as React. I have experience writing unit tests for React using Jest and Enzyme,
          and I have some experience with Cypress for end-to-end testing. I have some knowledge of
          the foundations of web accessibility,  WCAG 2.1. and am starting to impliment WAI-ARIA design
          patters inside my React components.</p>
        <p> In and outside of work I have strong driving motivation to improve my skill sets
          and keep up to date with the latest technologies, always looking for ways in which
          I can expand my technical knowledge. I have done some Freelance work, but am currently looking for a role that will
          allow me to work alongside an expert team of developers, thereby helping me to progress my career
          to more senior roles in the future. My current knowledge and education surrounding web development
          has been whilst maintaining my current job in an unrelated industry.</p>
        <h3>Skills</h3>
        <div className={styles.skills}>
          <Html5 /><Css3 /><Sass /><Javascript /><Typescript /><React /><Nextdotjs /><Cypress /><Jest /><Vite />
        </div>
      </section>
    </div>
  )
}
