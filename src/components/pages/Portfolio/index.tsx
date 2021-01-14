import { BLOCKS } from '@contentful/rich-text-types';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { FiberManualRecord, WorkOutline } from '@material-ui/icons';
import React from 'react';
import useAllProjects from '../../../hooks/useAllProjects';
import useDevice from '../../../hooks/useDevice';
import PageContainer from '../../Layout/PageContainer';
import MobileCarousel from './MobileCarousel';
import Projects from './Projects';
import { Node } from './types';
import useStyles from './useStyles';

const Portfolio: React.FunctionComponent = () => {
  const { isTabletDown, isIpadPro } = useDevice();
  const { allProjects } = useAllProjects();
  const classes = useStyles();

  const options = {
    renderNode: {
			[BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
				<List>{children}</List>
			),
			[BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
				<ListItem divider>{children}</ListItem>
			),
			[BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
				if (!node.content[0].value) return;

				return (
					<>
						<ListItemIcon>
							<FiberManualRecord />
						</ListItemIcon>
						<ListItemText>{children}</ListItemText>
					</>
				);
			},
		},
	};

	return (
		<PageContainer
			id={`portfolio`}
			Icon={WorkOutline}
			text={`Portfolio`}
			className={classes.portfolioContainer}
		>
			<>
				{isTabletDown && !isIpadPro ? (
					<MobileCarousel allProjects={allProjects} options={options} />
				) : (
					<Projects allProjects={allProjects} options={options} />
				)}
			</>
		</PageContainer>
	);
};

export default Portfolio;