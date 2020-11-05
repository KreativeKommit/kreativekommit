import React from 'react';

import Styles from './infobar.module.scss';

const InfoBar = props => {
    return (
        <div className = {`${Styles.infobar}`}>
            <div className = {`${Styles.infobar__container} container`}>
                <span className = {`${Styles.infobar__phone}`}>
                07447616226
                </span>
                <span className = {`${Styles.infobar__line}`}></span>
                <span className = {`${Styles.infobar__email}`}>
                    hello@kreativekommit.com
                </span>
            </div>
        </div>
    )
}
export default InfoBar;