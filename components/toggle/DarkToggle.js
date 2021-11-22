import React from "react";
import Toggle from "react-toggle";
import styles from "./darktoggle.module.scss";
import "react-toggle/style.css";
import { Moon, Sun } from "../icons";

export const DarkToggle = ({ isDark, onChange }) => {
  return (
    <Toggle
      className={styles.toggle}
      icons={{ checked: <Sun />, unchecked: <Moon /> }}
      aria-label="Dark mode"
      checked={isDark}
      onChange={onChange}
    />
  );
};
