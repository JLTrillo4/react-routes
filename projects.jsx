import projectsData from ' .. /data/projects'

const Projects = () => {
    return(
        <>
            <h1>Proyectos</h1>
            <ul>
                {projectsData.map(project => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={project.name} width='200' />
                        <p>{project.description}</p>
                        <a href={project.url} target='_blank'>Ver proyecto</a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Projects