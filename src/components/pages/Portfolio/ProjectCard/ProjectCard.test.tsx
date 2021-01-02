import React from 'react';
import ProjectCard from './ProjectCard';
import { renderWithProviders, screen } from '~/utils/testUtils';

describe(`ProjectCard`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<ProjectCard
				body={JSON.parse(`{}`)}
				gitRepositoryUrl={``}
				liveSiteUrl={``}
				options={{}}
				projectGif={``}
				title={`test title`}
			/>,
		);

		expect(
			screen.getByRole(`heading`, { name: /test title/i }),
		).toBeInTheDocument();
	});
});
