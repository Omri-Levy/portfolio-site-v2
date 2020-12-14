import {BLOCKS} from '@contentful/rich-text-types';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';
import {FiberManualRecord, WorkOutline} from '@material-ui/icons';
import {graphql, useStaticQuery} from 'gatsby';
import {React} from '../../../deps';
import useDevice from '../../../hooks/useDevice/useDevice';
import {PageTitle} from '../../PageTitle';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import {Projects} from './Projects';
import useStyles from './useStyles';

const Portfolio: React.FC = () => {
    const classes = useStyles();
    const {isMobile, isIpadProWidth, isIpadProHeight} = useDevice();
	const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                edges {
                    node {
                        node_locale
                        title
                        body {
                            raw
                        }
                        projectGif {
                            file {
                                url
                            }
                        }
                        liveSiteUrl
                        gitRepositoryUrl
                    }
                }
            }
        }
    `);

    const options = {
        renderNode: {
            [BLOCKS.UL_LIST]: (node, children) => <List>{children}</List>,
            [BLOCKS.LIST_ITEM]: (node, children) => (
                <ListItem divider>{children}</ListItem>
            ),
            [BLOCKS.PARAGRAPH]: (node, children) => {
                if (!node.content[0].value) return;

                return (
                    <>
                        <ListItemIcon>
                            <FiberManualRecord/>
                        </ListItemIcon>
                        <ListItemText>{children}</ListItemText>
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
                {isMobile && !(isIpadProHeight && isIpadProWidth)
                    ? <MobileCarousel
                        data={data}
                        options={options}
                    />
                    : <Projects
                        data={data}
                        options={options}
                    />
                }
            </Box>
        </section>
    );
};

export default Portfolio;
