import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import MobileCarousel from '../MobileCarousel';
import MobileProjectCard from './index';

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
