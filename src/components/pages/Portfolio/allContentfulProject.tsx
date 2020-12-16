import {graphql, useStaticQuery} from 'gatsby';
import {React} from 'src/deps';

const allContentfulProject: React.FunctionComponent = () => (
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
