import { Pagination } from '@material-ui/lab';
import React, { ChangeEvent, useContext, useState } from 'react';
import { v4 } from 'uuid';
import { ThemeContext } from '../../../../context/ThemeProvider';
import { ProjectsContainerProps } from '../../../../utils/types';
import ProjectCard from '../ProjectCard';

const Projects: React.FunctionComponent<ProjectsContainerProps> = (
  {
    allProjects,
    options,
  },
) => {
  const { isRTL } = useContext(ThemeContext);
  const locale = isRTL ? `he` : `en-US`;
  const filteredData = allProjects?.edges.filter(
		(project) => project.node.node_locale === locale,
	);
	const [page, setPage] = useState(1);
	const slicedData = filteredData.slice(page - 1, page);
	const handleChange = (event: ChangeEvent, page: number) => setPage(page);

	return (
		<>
			{slicedData?.map((project) => (
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
			<Pagination
				count={filteredData?.length}
				onChange={handleChange}
			/>
		</>
	);
};

export default Projects;
