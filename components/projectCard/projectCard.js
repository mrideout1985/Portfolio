import React from 'react'
import styles from "./projectCard.module.scss"

const ProjectCard = ({ title, type, background, linkToProject, page }) => {

	console.log(linkToProject)

	return (
		<li className={styles.list}>
			<div className={styles.container}>
				<div className={styles.background} style={{ background: `url(${background}`, backgroundSize: "cover", backgroundPosition: "center" }}>
					<div className={styles.link}>
						<a href={linkToProject}>Visit Project</a>
					</div>
				</div>
				<h4>{title}</h4>
				<h5>type: {type}</h5>
			</div>
		</li >
	)
}

export default ProjectCard

