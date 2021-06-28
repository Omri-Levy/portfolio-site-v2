import React from 'react';
import Layout from '../components/Layout';
import AboutMe from '../components/pages/AboutMe';
import ContactMe from '../components/pages/ContactMe';
import Portfolio from '../components/pages/Portfolio';
import Hero from '../components/pages/Hero';

const Home: React.FunctionComponent = () => {

	return (
		<Layout>
			<Hero />
			<AboutMe />
			<Portfolio />
			<ContactMe />
		</Layout>
	);
};

export default Home;
