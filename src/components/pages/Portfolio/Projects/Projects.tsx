import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import {Props} from './types';

const Projects: React.FC<Props> = ({data, options}) => {
    return (
        <>
            {data.allContentfulProject.edges.map((project) => (
                <ProjectCard
                    liveSiteUrl={project.node.liveSiteUrl}
                    gitRepositoryUrl={project.node.gitRepositoryUrl}
                    title={project.node.title}
                    body={JSON.parse(project.node.body.raw)}
                    options={options}
                    projectGif={project.node.projectGif.file.url}
                />
            ))}
        </>
    );
};

export default Projects;
