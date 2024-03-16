import React from "react";
import styles from "./projectCard.module.scss";

const ProjectCard = ({
  title,
  type,
  background,
  linkToProject,
  description,
  linkToGithub,
}) => {
  return (
    <li className={styles.list}>
      <div className={styles.container}>
        <div
          className={styles.background}
          style={{
            backgroundImage: `url(${background}`,
          }}
        >
          <div className={styles.link}>
            <a href={linkToProject}>Visit Project</a>
          </div>
          {linkToGithub && (
            <div className={styles.link}>
              <a href={linkToProject}>Visit Project</a>
            </div>
          )}
        </div>
        <h4>{title}</h4>
        <h5>{type}</h5>
        <div className={styles.description}>{description}</div>
      </div>
    </li>
  );
};

export default ProjectCard;
