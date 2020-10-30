import React from 'react';

import Styles from './home.module.scss';
import Header from '../../components/home/header'
import WeThink from '../../components/home/we think';
import RecentWork from '../../components/home/recent work';
import Clients from '../../components/home/clients';
import Expertise from '../../components/home/expertise';


const Home = props => {
    return (
        <div>
            <Header />
            <WeThink />
            <RecentWork />
            <Clients />
            <Expertise />
        </div>
    )
}
export default Home;