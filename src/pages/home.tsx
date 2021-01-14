import React, { useContext, useEffect } from 'react';
import Layout from '../components/Layout';
import AboutMe from '../components/pages/AboutMe';
import ContactMe from '../components/pages/ContactMe';
import Portfolio from '../components/pages/Portfolio';
import { ThemeContext } from '../context/ThemeProvider';

const Home: React.FunctionComponent = () => {
  const { setIsLandingPage } = useContext(ThemeContext);

  useEffect(() => {
    setIsLandingPage(false);
  }, []);

  return (
    <Layout>
			<Portfolio />
			<AboutMe />
			<ContactMe />
		</Layout>
	);
};

export default Home;
