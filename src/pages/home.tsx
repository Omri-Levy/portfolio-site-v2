import React, { useContext, useEffect } from 'react';
import { AboutMe } from '../components/pages/AboutMe';
import { ContactMe } from '../components/pages/ContactMe';
import { Portfolio } from '../components/pages/Portfolio';
import { ThemeContext } from '../context/ThemeContext';

const Home: React.FunctionComponent = () => {
	const { setIsLandingPage } = useContext(ThemeContext);

	useEffect(() => {
		setIsLandingPage(false);
	}, []);

	return (
		<>
			<Portfolio />
			<AboutMe />
			<ContactMe />
		</>
	);
};

export default Home;
