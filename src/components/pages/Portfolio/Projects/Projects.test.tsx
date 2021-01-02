import React from 'react';
import Projects from './Projects';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`Projects`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<Projects
				allProjects={{
					edges: [
						{
							node: {
								node_locale: `en-US`,
								title: `test title`,
								subtitle: ``,
								body: {
									raw: `{}`,
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

		expect(
			screen.getByRole(`heading`, { name: /test\stitle/i }),
		).toBeInTheDocument();
	});
});
