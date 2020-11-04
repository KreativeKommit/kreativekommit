import React from 'react';
import Styles from './tworow.module.scss';

const TwoRows = props =>{
    return (
        <div className = {` ${props.class} ${Styles.row}`} ref = {props.ref1}>
            <div className = {Styles.row__full} >
                <img className = {`${Styles.row__full__image}`}  src = {props.full} alt = 'full'/>
            </div>
            <div className = {Styles.row__half} ref = {props.ref1}>
                <div className = {`${Styles.row__half__item}`}>
                <img className = {`${Styles.row__half__image}`} src = {props.half1} alt = 'half' />

                </div>
                <div className = {`${Styles.row__half__item}`}>
                <img className = {`${Styles.row__half__image}`} src = {props.half2} alt = 'half' />

                </div>
            </div>
        </div>
    )
}
export default TwoRows;