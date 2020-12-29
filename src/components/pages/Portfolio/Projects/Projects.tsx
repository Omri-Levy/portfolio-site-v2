import React, { useContext } from 'react';
import { ThemeContext } from '~/context/ThemeContext';
import { ProjectsContainerProps } from '~/utils/types';
import { v4 } from 'uuid';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects: React.FunctionComponent<ProjectsContainerProps> = ({
	allProjects,
	options,
}) => {
	const { isRTL } = useContext(ThemeContext);
	const locale = isRTL ? `he` : `en-US`;
	const filteredData = allProjects?.edges.filter(
		(project) => project.node.node_locale === locale,
	);

	return (
		<>
			{filteredData?.map((project) => (
				<ProjectCard
					key={v4()}
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
