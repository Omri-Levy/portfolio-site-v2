import {BLOCKS} from '@contentful/rich-text-types';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery
} from '@material-ui/core';
import {FiberManualRecord, WorkOutline} from '@material-ui/icons';
import {graphql, useStaticQuery} from 'gatsby';
import {React} from '../../deps';
import {PageTitle} from '../PageTitle';
import MobileCarousel from './MobileCarousel/MobileCarousel';
import {Projects} from './Projects';
import useStyles from './useStyles';

const Portfolio: React.FC = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery((theme) => (
        theme.breakpoints.down('sm')
    ));
	const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                edges {
                    node {
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
            <PageTitle Icon={WorkOutline} text={'Portfolio'}/>
            {isMobile
                ? <MobileCarousel
                    data={data}
                    options={options}
                />
                : <Projects
                    data={data}
                    options={options}
                />
            }
        </section>
    );
};

export default Portfolio;
