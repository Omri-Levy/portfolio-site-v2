import { graphql, useStaticQuery } from 'gatsby';
import { HookReturns } from './types';

const useProfilePic = (): HookReturns =>
	useStaticQuery(graphql`
		query profilePic {
			image: file(relativePath: { eq: "profilePic.png" }) {
				childImageSharp {
					fluid(maxWidth: 180, maxHeight: 180) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`) || {};

export default useProfilePic;
