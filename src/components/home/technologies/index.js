import React,{useEffect,useRef} from 'react';
import Styles from './technologies.module.scss';
import Aws from '../../../images/main page/Aws.jfif';
import react from '../../../images/main page/React.png';
import Css from '../../../images/main page/Css.png';
import Mongodb from '../../../images/main page/Mongodb.png';
import Nodejs from '../../../images/main page/Nodejs.png';
import Js from '../../../images/main page/Js.png';

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
                    <img alt = 'Aws' src = {Aws}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'react' src = {react}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'Js' src = {Js}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'Css' src = {Css}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'sitefinit' src = {Nodejs}/>
                </li>
                <li className = {`${Styles.technologies__list__item}`}>
                    <img alt = 'Mongodb' src = {Mongodb}/>
                </li>
            </ul>

            
        </div>
    )
}
export default Technologies;