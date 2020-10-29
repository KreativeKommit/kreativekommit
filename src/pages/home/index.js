import React from 'react';

import Styles from './home.module.scss';
import Header from '../../components/home/header'
import WeThink from '../../components/home/we think';
import RecentWork from '../../components/home/recent work';

const Home = props => {
    return (
        <div>
            <Header />
            <WeThink />
            <RecentWork />
        </div>
    )
}
export default Home;