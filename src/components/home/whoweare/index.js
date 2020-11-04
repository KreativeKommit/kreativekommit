import React, { useEffect } from 'react';
import OneRow from './components/1row';
import TwoRows from './components/2trow';
import Slider from './components/slider';
import Styles from './whoweare.module.scss';
import full from '../../../images/main page/full.jpg';
import half1 from '../../../images/main page/half1.jpg';
import half2 from '../../../images/main page/half2.jpg';
import half3 from '../../../images/main page/half3.jpg';
import half4 from '../../../images/main page/half4.jpg';
import half5 from '../../../images/main page/half5.jpg';

const WhoWeAre = props => {
    

    useEffect(()=>{
        const divs = document.querySelectorAll(`.${Styles.whoweare} > div > div`);

        const handleScroll = e => {
            for(let div of divs){
                const itemRect = div.getBoundingClientRect();
                if (
                    itemRect.top >= 0 &&
                    itemRect.left >= 0 &&
                    itemRect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
                    itemRect.bottom - itemRect.height/1.2 <= (window.innerHeight || document.documentElement.clientHeight)
                ){
                    div.style.transform = 'translateX(0)';
                    div.style.opacity = '1'
                } 
            }
        }
        document.addEventListener('scroll',handleScroll);
    },[]);
    return (
        <section className = {`${Styles.whoweare} container`}>
            <header className = {`${Styles.whoweare__header}`}>
                <h5 className = {`${Styles.whoweare__heading}`}>
                    WHO WE ARE
                </h5>
                <p className = {`${Styles.whoweare__details}`}>
                    We are kreative kommit in Los Angeles and as innovators
                    in creative website design & digital marketing, we build
                    AWESOME digital masterpieces. Take a sneak peek at our 
                    team, offices, culture, philosophy and beliefs.
                </p>
            </header>
            
            <Slider />
            <TwoRows 
                class = {`${Styles.left}`} 
                full = {full}
                half1 = {half1}
                half2 = {half2}
            />
            <OneRow 
                class = {`${Styles.right}`}
                items = {[
                    {
                        type:'text',
                        quote:'Design is not what it looks and feels like, design is how it works.',
                        author:'Steve Jobs'
                    },
                    {
                        type:'image',
                        src:half3
                    },
                    {
                        type:'text',
                        quote:'It’s kind of fun to do the impossible.',
                        author:'Walt Disney'
                    }
                ]}
            />
            <OneRow 
                class = {`${Styles.left}`} 
                items = {[
                    {
                        type:'image',
                        src:half4
                    },
                    {
                        type:'text',
                        quote:'Design is so simple. That’s why it’s so complicated.',
                        author:'Paul Rand',
                        color:'#2F2F35'
                    },
                    {
                        type:'image',
                        src:half5
                    }
                ]}
            />
            <TwoRows 
                class = { `${Styles.right}`}
                full = {full}
                half1 = {half1}
                half2 = {half2}
            />
        </section>
    )
}
export default WhoWeAre;