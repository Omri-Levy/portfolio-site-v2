import { graphql, useStaticQuery } from 'gatsby';

const useProfilePic = () =>
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
	`);

export default useProfilePic;
