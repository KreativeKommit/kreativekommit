import React from 'react';
import Styles from './work-item.module.scss';

const WorkItem = props => {
    const {image,heading,title} = props;
    return (
        <div className = {`${Styles.item}`}>
            <div 
                className = {Styles.item__image} 
                
            >
                <img src = {image} alt = 'project' />
            </div>
            <div className = {Styles.item__overlay}></div>
            <div className = {Styles.item__details}>
                <div className = {`${Styles.item__details__wrapper}`}>
                    <h4 className = {Styles.item__heading}>
                        {heading}
                    </h4>
                    <p className = {`${Styles.item__title}`}>
                        {title}
                    </p>
                    <button className = {`${Styles.item__button}`}>
                        explore project
                    </button>
                </div>
                
            </div>

        </div>
    )
}
export default WorkItem;