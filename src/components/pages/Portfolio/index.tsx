import { BLOCKS } from '@contentful/rich-text-types';
import { WorkOutline } from '@material-ui/icons';
import React from 'react';
import useAllProjects from '../../../hooks/useAllProjects';
import PageContainer from '../../Layout/PageContainer';
import Projects from './Projects';
import { Node } from './types';
import { Box, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';

const StyledGridContainer = styled(Box)(({ theme }) => {
	const mdDown = getCustomBreakpoints(`md`, `down`);

	return css`
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    gap: ${theme.spacing(1)}em;
    margin-bottom: ${theme.spacing(1)}em;

    @media only screen and (max-width: 70em) {
      justify-content: center;
      grid-template-columns: 1fr 1fr;
      padding-bottom: ${theme.spacing(1)}em;
    }

    ${mdDown} {
      grid-template-columns: 1fr;
    }
	`;
});

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
			<StyledGridContainer>
				<Projects allProjects={allProjects} options={options} />
			</StyledGridContainer>
		</PageContainer>
	);
};

export default Portfolio;
