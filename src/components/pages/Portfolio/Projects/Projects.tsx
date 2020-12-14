import React from 'react';
import {v4} from 'uuid';
import {ThemeContext} from '../../../../context/ThemeContext';
import {useContext} from '../../../../deps';
import ProjectCard from '../ProjectCard/ProjectCard';
import {Props} from './types';

const Projects: React.FC<Props> = ({data, options}) => {
    const {isRTL} = useContext(ThemeContext);
    const locale = isRTL ? 'he' : 'en-US';

    return (
        <>
            {data.allContentfulProject.edges.map((project) => {
                if (project.node.node_locale !== locale) {
                    return;
                }

                return (
                    <ProjectCard
                        key={v4()}
                        liveSiteUrl={project.node.liveSiteUrl}
                        gitRepositoryUrl={project.node.gitRepositoryUrl}
                        title={project.node.title}
                        body={JSON.parse(project.node.body.raw)}
                        options={options}
                        projectGif={project.node.projectGif.file.url}
                    />
                );
            })}
        </>
    );
};

export default Projects;
