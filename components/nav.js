import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./nav.module.scss";
import { useRouter } from "next/router";
import { DarkToggle } from "../components/toggle/DarkToggle";
import { useMediaQuery } from "react-responsive";

const Nav = () => {
  const router = useRouter();
  const DARK_CLASS = "dark";
  // const systemPrefersDark = useMediaQuery(
  //   {
  //     query: "(prefers-color-scheme: dark)",
  //   },
  //   undefined,
  //   (prefersDark) => {
  //     setIsDark(prefersDark);
  //   }
  // );

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a href="">MR</a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <a
              className={[
                [styles["default"]],
                [router.pathname === "/" ? styles["active"] : ""],
              ].join(" ")}
            >
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={[
                [styles["default"]],
                [router.pathname === "/projects" ? styles["active"] : ""],
              ].join(" ")}
            >
              Projects
            </a>
          </Link>
        </div>
        <DarkToggle isDark={isDark} onChange={(e) => setIsDark(!isDark)} />
      </nav>
    </header>
  );
};

export default Nav;
