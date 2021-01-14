import React from 'react';
import { renderWithProviders, screen } from '../../../../utils/testUtils';
import ProjectCard from './';

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
