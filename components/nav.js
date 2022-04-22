import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./nav.module.scss";
import { useRouter } from "next/router";
import { DarkToggle } from "../components/toggle/DarkToggle";

const setLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};
const getLocalStorage = (key, initialValue) => {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    return initialValue;
  }
};

const Nav = () => {
  const [isDark, setIsDark] = useState(getLocalStorage("isDark", false));
  const router = useRouter();
  const DARK_CLASS = "dark";

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add(DARK_CLASS);
      setLocalStorage("isDark", true);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
      setLocalStorage("isDark", false);
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
        <DarkToggle isDark={isDark} onChange={() => setIsDark(!isDark)} />
      </nav>
    </header>
  );
};

export default Nav;
