import React from 'react';
import Layout from '../components/Layout';
import ContactMe from '../components/pages/ContactMe';
import Hero from '../components/pages/Hero';
import AboutMe from '../components/pages/AboutMe';
import Portfolio from '../components/pages/Portfolio';

const Home: React.FunctionComponent = () => {

	return (
		<Layout>
			<Hero />
			<AboutMe />
			<ContactMe />
			<Portfolio />
		</Layout>
	);
};

export default Home;
