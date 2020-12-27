import { graphql, useStaticQuery } from "gatsby";
import { Icons } from "./types";

const useAllFavicons = (): Icons =>
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
	`) || {};

export default useAllFavicons;
