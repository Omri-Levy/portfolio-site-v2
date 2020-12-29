import React from 'react';
import MobileCarousel from './MobileCarousel';
import { renderWithProviders } from '~/utils/testUtils';

describe(`MobileCarousel`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<MobileCarousel
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
