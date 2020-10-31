import React from 'react';
import Styles from './onerow.module.scss';

const OneRow = props => {
    const renderItems = _ => {
        return props.items.map(item => {
            if (item.type === 'image'){
                return (
                    <div className = {Styles.row__image}>
                        <img src = {item.src} alt = {item.alt} />
                    </div>
                )
            }
            return (
                <div className = {`${Styles.row__text}`} style = {item.color?{backgroundColor:item.color}:{}}>
                    <p className = {`${Styles.row__text__quote}`}>
                        &ldquo;{item.quote}&rdquo;
                    </p>
                    <p className = {`${Styles.row__text__author}`}>
                        - {item.author}
                    </p>
                </div>
            )
        })
    }
    return (
        <div className = {` ${props.class} ${Styles.row}`}>
            {renderItems()}
        </div>
    )
}
export default OneRow;