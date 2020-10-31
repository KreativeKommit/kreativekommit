import React from 'react';
import Styles from './technologies.module.scss';
import umbraco from '../../../images/main page/umbraco.png';
import wordpress from '../../../images/main page/wordpress.png';
import kentico from '../../../images/main page/Kentico-Logo.png';
import magneto from '../../../images/main page/magneto-logo.png';
import sitefinity from '../../../images/main page/sitefinity.png';
import net from '../../../images/main page/.net.jpg';

const Technologies = props => {
    return (
        <div className = {`${Styles.technologies} container`}>
            <h4 className = {`${Styles.technologies__heading}`}>
                TECHNOLOGIES
            </h4>

            <ul className = {`${Styles.technologies__list} list-unstyled`}>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'umbraco' src = {umbraco}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'wordpress' src = {wordpress}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'net' src = {net}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'kentico' src = {kentico}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'sitefinit' src = {sitefinity}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'magneto' src = {magneto}/>
                </li>
            </ul>

            
        </div>
    )
}
export default Technologies;