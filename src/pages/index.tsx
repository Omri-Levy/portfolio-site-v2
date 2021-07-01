import React from 'react';
import Layout from '../components/Layout';
import ContactMe from '../components/pages/ContactMe';
import Hero from '../components/pages/Hero';
import AboutMe from '../components/pages/AboutMe';

const Home: React.FunctionComponent = () => {

	return (
		<Layout>
			<Hero />
			<AboutMe />
			{/*<Portfolio />*/}
			<ContactMe />
		</Layout>
	);
};

export default Home;
