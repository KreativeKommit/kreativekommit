import React from 'react';
import MainInfo from './components/main info';
import Slider from './components/slider';
import Styles from './wethink.module.scss';

const WeThink = props => {
    return (
        <section className = {`${Styles.wethink}`}>
            <MainInfo />
            <Slider />
        </section>
    )
}
export default WeThink;