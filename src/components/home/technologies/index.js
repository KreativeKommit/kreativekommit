import React,{useEffect,useRef} from 'react';
import Styles from './technologies.module.scss';
import umbraco from '../../../images/main page/umbraco.png';
import wordpress from '../../../images/main page/wordpress.png';
import kentico from '../../../images/main page/Kentico-Logo.png';
import magneto from '../../../images/main page/magneto-logo.png';
import sitefinity from '../../../images/main page/sitefinity.png';
import net from '../../../images/main page/.net.jpg';

const Technologies = props => {
    const itemRef = useRef(document.querySelector('.'+Styles.technologies));
    
    useEffect(() => {
        const handleScroll = (e)=>{
            // check wherther it is in the window or not
            if(itemRef.current){
                const itemRect = itemRef.current.getBoundingClientRect();
                if (
                    itemRect.top >= 0 &&
                    itemRect.left >= 0 &&
                    itemRect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                    itemRect.bottom - itemRect.height/2 <= (window.innerHeight || document.documentElement.clientHeight)
                ) {
                    itemRef.current.style.transform = 'translateY(0)';
                    itemRef.current.style.opacity = '1';
                }
                
            }
        }
        document.addEventListener('scroll',handleScroll);
    }, [itemRef])
    return (
        <div className = {`${Styles.technologies} container`} ref = {itemRef}>
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