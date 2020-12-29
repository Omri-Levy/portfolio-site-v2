import React from 'react';
import ProjectCard from './ProjectCard';
import { renderWithProviders } from '~/utils/testUtils';

describe(`ProjectCard`, () => {
	it(`renders`, () => {
		renderWithProviders(
			<ProjectCard
				body={JSON.parse(`{}`)}
				gitRepositoryUrl={``}
				liveSiteUrl={``}
				options={{}}
				projectGif={``}
				title={``}
			/>,
		);
	});
});
