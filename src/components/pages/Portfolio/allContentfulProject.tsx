import {graphql, useStaticQuery} from 'gatsby';
import {HookReturns} from './types';

const allContentfulProject: HookReturns = () => (
	useStaticQuery(
        graphql`
            query allContentfulProject {
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
        `
	)
);

export default allContentfulProject;
