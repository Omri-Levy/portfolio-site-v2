import { WorkOutline } from '@material-ui/icons';
import React from 'react';
import useAllProjects from '../../../hooks/useAllProjects';
import PageContainer from '../../Layout/PageContainer';
import Projects from './Projects';
import { StyledGridContainer } from './styled';
import useActiveSection from './hooks/useActiveSection';
import useContentfulOptions from './hooks/useContentfulOptions';

const Portfolio: React.FunctionComponent = () => {
	const { allProjects } = useAllProjects();
	const { controls, container, items } = useActiveSection();
	const options = useContentfulOptions();


	return (
		<PageContainer
			id={`portfolio`}
			Icon={WorkOutline}
			text={`Portfolio`}
		>
			<StyledGridContainer
				variants={container}
				initial={`hidden`}
				animate={controls}
			>
				<Projects
					variants={items}
					allProjects={allProjects}
					options={options}
				/>
			</StyledGridContainer>
		</PageContainer>
	);
};

export default Portfolio;
