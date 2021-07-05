import { BLOCKS } from '@contentful/rich-text-types';
import { WorkOutline } from '@material-ui/icons';
import React, { useEffect } from 'react';
import useAllProjects from '../../../hooks/useAllProjects';
import PageContainer from '../../Layout/PageContainer';
import Projects from './Projects';
import { Node } from './types';
import { Box, Typography } from '@material-ui/core';
import styled, { css } from 'styled-components';
import getCustomBreakpoints from '../../../utils/getCustomBreakpoints';
import { motion, useAnimation } from 'framer-motion';

const StyledGridContainer = styled(motion(Box))(({ theme }) => {
	const lgDown = getCustomBreakpoints(`lg`, `down`);
	const xlDown = getCustomBreakpoints(`xl`, `down`);

	return css`
    grid-template-columns: auto auto auto;
    display: grid;
    gap: ${theme.spacing(0.5)}em;
    padding-bottom: ${theme.spacing(1)}em;

    ${xlDown} {
      justify-content: center;
      grid-template-columns: auto auto;
    }

    ${lgDown} {
      grid-template-columns: auto;
    }
	`;
});
const StyledTypography = styled(Typography)(({ theme }) => {


	return css`
    min-height: 7em;
	`;
});

const Portfolio: React.FunctionComponent = () => {
	const { allProjects } = useAllProjects();


	const options = {
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
				if (!node.content[0].value) return;

				return (
					<StyledTypography
						variant={`body2`}
						color={`textSecondary`}
						// @ts-ignore
						component={`p`}
					>
						{children}
					</StyledTypography>
				);
			},
		},
	};
	const controls = useAnimation();

	useEffect(() => {
		const listener = async () => {
			const thisSection = document.getElementById(`portfolio`);
			const isActive = thisSection?.classList.contains(`active-section`);

			if (isActive) {
				await controls.start(`show`);
			} else {
				await controls.start(`hidden`);
			}
		};
		(() => listener())();

		document.addEventListener(`scroll`, listener, false);

		return () => {
			document.removeEventListener(`scroll`, listener, false);
		};
	}, []);
	const items = {
		hidden: {
			scale: 0,
		},
		show: {
			scale: 1,
		},
	};
	const container = {
		hidden: {
			opacity: 0,
		},
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
				delayChildren: 0.2,
			},
		},
	};


	return (
		<PageContainer
			id={`portfolio`}
			Icon={WorkOutline}
			text={`Portfolio`}
		>
			<StyledGridContainer
				variants={container}
				initial={`hidden`}
				animate={controls}
			>
				<Projects
					variants={items}
					allProjects={allProjects}
					options={options}
				/>
			</StyledGridContainer>
		</PageContainer>
	);
};

export default Portfolio;
