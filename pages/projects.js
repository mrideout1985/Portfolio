import React from 'react'
import Meta from '../components/meta/meta'
import ProjectCard from '../components/projectCard/projectCard'
import styles from "../styles/Projects.module.scss"



const Projects = () => {

	const projectList = [
		{ title: "RMDb Movie Database", type: "Personal", background: "/rmdb.png", linkToProject: "https://youthful-dijkstra-81cc66.netlify.app/", page: "/rmdb" },
		{ title: "South West Wales Amalgamated", type: "Freelance, work in progress", background: "/swwamal.png", linkToProject: "https://south-west-wales-amalgamated-6bizh9v29-mrideout1985.vercel.app/", page: "/swwamal" },
		{ title: "To Do List", type: "Personal", background: "/todo.jpg", linkToProject: "https://epic-mahavira-32a793.netlify.app/", page: "/todo" },
	]

	return (
		<section className={styles.container}>
			<Meta title="Projects">
				<meta name="projects page" content="Created by Matt Rideout" />
			</Meta>
			{projectList.map((project, i) => (
				<ProjectCard key={i} title={project.title} background={project.background} type={project.type} linkToProject={project.linkToProject} />
			))}
		</section>
	)
}

export default Projects
