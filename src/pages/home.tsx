import React from 'react';
import {AboutMe} from '../components/pages/AboutMe';
import {ContactMe} from '../components/pages/ContactMe';
import {Layout} from '../components/Layout';
import {Portfolio} from '../components/pages/Portfolio';

const Home: React.FC = () => (
    <Layout>
        <Portfolio/>
        <AboutMe/>
        <ContactMe/>
    </Layout>
);

export default Home;
