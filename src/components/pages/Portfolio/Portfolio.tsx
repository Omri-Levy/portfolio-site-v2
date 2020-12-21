import {BLOCKS} from '@contentful/rich-text-types';
import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core';
import {FiberManualRecord, WorkOutline} from '@material-ui/icons';
import React from 'react';
import {PageTitle} from '../../PageTitle';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import {Projects} from './Projects';
import {Node} from './types';
import useStyles from './useStyles';
import useAllProjects from './useAllProjects';
import useDevice from '../../../hooks/useDevice/useDevice';

const Portfolio: React.FunctionComponent = () => {
	const classes = useStyles();
	const {isMobile, isIpadPro} = useDevice();
	const {allProjects} = useAllProjects();

	const options = {
		renderNode: {
			[BLOCKS.UL_LIST]: (node: Node, children: React.ReactNode) => (
				<List>
                    {children}
                </List>
            ),
            [BLOCKS.LIST_ITEM]: (node: Node, children: React.ReactNode) => (
                <ListItem divider>
                    {children}
                </ListItem>
            ),
            [BLOCKS.PARAGRAPH]: (node: Node, children: React.ReactNode) => {
                if (!node.content[0].value) return;

                return (
                    <>
                        <ListItemIcon>
                            <FiberManualRecord/>
                        </ListItemIcon>
                        <ListItemText>
                            {children}
                        </ListItemText>
                    </>
                );
            }
        }
    };

    return (
        <section
            className={classes.portfolioContainer}
            id={'portfolio'}
        >
            <PageTitle
                Icon={WorkOutline}
                text={'Portfolio'}
            />
            <Box
                className={classes.innerBox}
            >
				{isMobile && !isIpadPro
					? <MobileCarousel
						allProjects={allProjects}
						options={options}
					/>
					: <Projects
						allProjects={allProjects}
						options={options}
					/>
				}
            </Box>
        </section>
    );
};

export default Portfolio;
