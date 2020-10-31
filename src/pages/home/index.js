import React from 'react';

import Styles from './home.module.scss';
import Header from '../../components/home/header'
import WeThink from '../../components/home/we think';
import RecentWork from '../../components/home/recent work';
import Clients from '../../components/home/clients';
import Expertise from '../../components/home/expertise';
import Technologies from '../../components/home/technologies';
import Connect from '../../components/home/connect';
import WhoWeAre from '../../components/home/whoweare';


const Home = props => {
    return (
        <div>
            <Header />
            <WeThink />
            <RecentWork />
            <Clients />
            <Expertise />
            <Technologies />
            <Connect />
            <WhoWeAre />
        </div>
    )
}
export default Home;