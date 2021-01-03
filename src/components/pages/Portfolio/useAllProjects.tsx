import { graphql, useStaticQuery } from 'gatsby';
import { HookReturns } from './types';

const useAllProjects: HookReturns = () =>
	useStaticQuery(graphql`
		query allContentfulProject {
			allProjects: allContentfulProject {
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
	`) || {};

export default useAllProjects;
