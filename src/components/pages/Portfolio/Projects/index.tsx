import React from 'react';
import { ProjectsContainerProps } from '../../../../utils/types';
import useThemeContext from '../../../../context/ThemeProvider/useThemeContext';
import ProjectCard from '../ProjectCard';

const Projects: React.FunctionComponent<ProjectsContainerProps> = (
	{
		allProjects,
		options,
		variants,
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
						variants={variants}
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
