import Meta from "../components/meta/meta";
import ProjectCard from "../components/projectCard/projectCard";
import styles from "../styles/Projects.module.scss";

const projectList = [
  {
    title: "Notes App",
    type: "Personal Project / Learning",
    background: "/notes.png",
    linkToProject: "https://github.com/mrideout1985/notes-app",
    description:
      "A full stack note taking app with an own rolled user auth using jwt & bcrypt. Backend is built with NestJs, Mongoose and MongoDB. Frontend is built with React and the whole app is written in Typescript. App is currently not deployed as it is currently a work in progress but is available to view on github.",
  },
  {
    title: "South West Wales Amalgamated",
    type: "Freelance, work in progress",
    background: "/swwamal.png",
    linkToProject: "https://cwuswwales.org",
    linkToGithubProject: "https://github.com/mrideout1985/swwamal",
    description: "A website for South West Wales Communications Union.",
  },
  {
    title: "RMDb Movie Database",
    type: "Personal Project / Learning",
    background: "/rmdb.png",
    linkToProject: "https://youthful-dijkstra-81cc66.netlify.app",
    description: "A movie database built with React and TMDB Api",
  },
];

const Projects = () => {
  return (
    <section className={styles.container}>
      <Meta title="Projects">
        <meta name="projects page" content="Created by Matt Rideout" />
      </Meta>
      <div className={styles.projects}>
        {projectList &&
          projectList.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              background={project.background}
              type={project.type}
              linkToProject={project.linkToProject}
              description={project.description}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;
