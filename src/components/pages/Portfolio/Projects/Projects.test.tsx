import React from 'react';
import Projects from './Projects';
import { renderWithProviders } from '~/utils/testUtils';

describe(`Projects`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Projects
				allProjects={{
					edges: [
						{
							node: {
								node_locale: ``,
								title: ``,
								subtitle: ``,
								body: {
									raw: ``,
								},
								projectGif: {
									file: {
										url: ``,
									},
								},
								liveSiteUrl: ``,
								gitRepositoryUrl: ``,
							},
						},
					],
				}}
				options={{}}
			/>,
		);
	});
});
