import React,{useEffect, useRef} from 'react';
import Styles from './work-item.module.scss';

const WorkItem = props => {
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
                    itemRect.bottom - itemRect.height/2 <= (window.innerHeight || document.documentElement.clientHeight)
                ) {
                    itemRef.current.style.transform = 'translateY(0)';
                    itemRef.current.style.opacity = '1';
                }
                
            }
        }
        document.addEventListener('scroll',handleScroll);
    }, [itemRef])
    const {image,heading,title} = props;
    return (
        <div className = {`${Styles.item}`} ref = {itemRef}>
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