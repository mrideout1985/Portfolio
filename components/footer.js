import React from "react";
import { Github, Linkedin, Gmail } from "../components/icons/index";
import { useMedia } from "react-use";

import styles from "./footer.module.scss";

const Footer = () => {
  const isWide = useMedia("(max-width: 500px)");
  return (
    <footer className={styles.footer}>
      <div className={styles.name}>Matthew Rideout</div>
      <div className={styles.contact}>
        <a href="https://github.com/mrideout1985">
          <Github size={isWide ? 25 : 46} />
        </a>

        <a href="https://www.linkedin.com/in/matthew-rideout-6b184a19b/">
          <Linkedin size={isWide ? 25 : 46} />
        </a>

        <a href="mailto:mrideout.dev@gmail.com, mrideout1985@gmail.com">
          <Gmail size={isWide ? 25 : 46} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
