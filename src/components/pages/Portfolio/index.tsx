import { BLOCKS } from '@contentful/rich-text-types';
import { WorkOutline } from '@material-ui/icons';
import React from 'react';
import useAllProjects from '../../../hooks/useAllProjects';
import PageContainer from '../../Layout/PageContainer';
import Projects from './Projects';
import { Node } from './types';
import { Typography } from '@material-ui/core';

const Portfolio: React.FunctionComponent = () => {
	const { allProjects } = useAllProjects();


	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
				if (!node.content[0].value) return;

				return (
					<Typography>{children}</Typography>
				);
			},
		},
	};

	return (
		<PageContainer
			id={`portfolio`}
			Icon={WorkOutline}
			text={`Portfolio`}

		>
			<Projects allProjects={allProjects} options={options} />
		</PageContainer>
	);
};

export default Portfolio;
