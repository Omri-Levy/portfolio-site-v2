import React from 'react';
import {AboutMe} from '../components/AboutMe';
import {ContactMe} from '../components/ContactMe';
import {Head} from '../components/Head';
import {Layout} from '../components/Layout';
import {Portfolio} from '../components/Portfolio';

const Home: React.FC = () => {
    return (
        <Layout>
            <Head/>
            <Portfolio/>
            <AboutMe/>
            <ContactMe/>
        </Layout>
    );
};

export default Home;
