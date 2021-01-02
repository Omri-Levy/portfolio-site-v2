import React from 'react';
import MobileProjectCard from './MobileProjectCard';
import { renderWithProviders, screen } from '~/utils/testUtils';
import { MobileCarousel } from '~/components/pages/Portfolio/MobileCarousel';

describe(`MobileProjectCard`, () => {
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
			>
				<MobileProjectCard
					body={JSON.parse(`{}`)}
					gitRepositoryUrl={``}
					index={0}
					liveSiteUrl={``}
					options={{}}
					projectGif={``}
					title={`test title`}
				/>
			</MobileCarousel>,
		);

		expect(screen.getByRole(`listbox`)).toBeInTheDocument();
	});
});
