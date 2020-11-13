import React,{useEffect,useRef} from 'react';
import Styles from './expertiseitem.module.scss';
import {Link} from 'react-router-dom';

const Item  = props => {
    const itemRef = useRef(document.querySelector('.'+Styles.item));
    
    useEffect(() => {
        const handleScroll = (e)=>{
            // check wherther it is in the window or not
            if(itemRef.current){
                const itemRect = itemRef.current.getBoundingClientRect();
                if (
                    itemRect.top >= 0 &&
                    itemRect.left >= 0 &&
                    itemRect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                    itemRect.bottom - itemRect.height/1.2 <= (window.innerHeight || document.documentElement.clientHeight)
                ) {
                    itemRef.current.style.transform = 'translateY(0)';
                    itemRef.current.style.opacity = '1';
                }
                
            }else{
                itemRef.current.style.transform = 'translateY(15px)';
                itemRef.current.style.opacity = '0';
            }
        }
        document.addEventListener('scroll',handleScroll);
    }, [itemRef])
    return (
        <div className = {`${Styles.item}`} ref = {itemRef}>
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
                            {props.secondLayerList.map(item => {
                               return <li> <Link to = '#'>{item}</Link></li>
                            })}
                            
                            

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