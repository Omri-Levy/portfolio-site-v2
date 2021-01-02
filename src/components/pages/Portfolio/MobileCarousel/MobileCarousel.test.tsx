import React from 'react';
import MobileCarousel from './MobileCarousel';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`MobileCarousel`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<MobileCarousel
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
			screen.getByRole(`heading`, { name: /test title/i }),
		).toBeInTheDocument();
	});
});
