import React from 'react';
import { ProjectsContainerProps } from '../../../../utils/types';
import ProjectCard from '../ProjectCard';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';

const Projects: React.FunctionComponent<ProjectsContainerProps> = (
	{
		allProjects,
		options,
	},
) => {
	const { isRTL } = useThemeContext();
	const locale = isRTL ? `he` : `en-US`;
	const filteredData = allProjects?.edges.filter(
		(project) => project.node.node_locale === locale,
	);

	return (
		<>
			{filteredData?.map((project) => (
					<ProjectCard
						key={project.node.title}
						liveSiteUrl={project.node.liveSiteUrl}
						gitRepositoryUrl={project.node.gitRepositoryUrl}
						title={project.node.title}
						body={JSON.parse(project.node.body.raw)}
						options={options}
						projectGif={project.node.projectGif.file.url}
					/>
				),
			)}
		</>
	);
};

export default Projects;
