import {graphql, useStaticQuery} from 'gatsby';

const useAllFavicons = () => (
	useStaticQuery(graphql`
        query getFavicon {
            icons: allImageSharp {
                edges {
                    node {
                        fluid(maxWidth: 512, maxHeight: 512) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    `)
);

export default useAllFavicons;
