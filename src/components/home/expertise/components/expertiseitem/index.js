import React from 'react';
import Styles from './expertiseitem.module.scss';
import expertise from '../../../../../images/main page/expertise.jpg';
import {Link} from 'react-router-dom';

const Item  = props => {
    return (
        <div className = {`${Styles.item}`}>
            <div className = {`${Styles.item__container}`}>
                <i className = {`fa ${props.icon} fa-lg ${Styles.item__icon}`}></i>
                <h3 className = {`${Styles.item__heading}`}>
                    {props.heading}
                </h3>
                <p className = {`${Styles.item__details}`}>
                    {props.details}
                </p>
                <span className = {`${Styles.item__link}`}>
                    EXPLORE SERVICES &gt;
                </span>
            </div>
            <div className = {Styles.item__secondlayer}>
                
                    <img 
                        className = {`${Styles.item__secondlayer__image}`} 
                        src = {props.image} 
                        alt = 'expertise'
                    />
                    <div className = {Styles.item__secondlayer__overlay}></div>
                    <div className = {Styles.item__secondlayer__content}>
                        <h4 className = {`${Styles.item__secondlayer__content__heading}`}>{props.heading}</h4>
                        <ul className = {`${Styles.item__secondlayer__content__ul}`}>
                            <li> <Link to = '#'>Visual Design</Link></li>
                            <li><Link to  = '#'>Development</Link></li>
                            <li><Link to = '#'>CMS Design & Implementation</Link></li>
                            <li><Link to = "#">ECommerce</Link></li>
                            <li><Link to = '#'>Compaign Microsites</Link></li>
                            <li><Link to = '#'>Website Redesign Services</Link></li>
                            <li><Link to = '#'>Website Maintanence Services</Link></li>

                        </ul>
                        <button className = {`${Styles.item__secondlayer__content__button}`}>
                            LEARN MORE
                        </button>
                    </div>

            </div>
            
        </div>
    )
}
export default Item;