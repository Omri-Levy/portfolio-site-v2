import React from 'react';
import {AboutMe} from '../components/AboutMe';
import {ContactMe} from '../components/ContactMe';
import {Layout} from '../components/Layout';
import {Portfolio} from '../components/Portfolio';

const Home: React.FC = () => (
    <Layout>
        <Portfolio/>
        <AboutMe/>
        <ContactMe/>
    </Layout>
);

export default Home;
