import React from 'react';
import Item from './components/expertiseitem';
import Styles from './expertise.module.scss';
import expertise from '../../../images/main page/expertise.jpg';
import expertise2 from '../../../images/main page/expertise2.jpg';
import expertise3 from '../../../images/main page/expertise3.jpg';
import expertise4 from '../../../images/main page/expertise4.jpg';
import expertise5 from '../../../images/main page/expertise5.jpg';
import expertise6 from '../../../images/main page/expertise6.jpg';

const Expertise = props => {
    return (
        <section className = {`${Styles.expertise}`}>
            <div className = {`${Styles.expertise__container}`}>
                <header className = {`${Styles.expertise__header}`}>
                    <h4 className = {`${Styles.expertise__heading} container`}>EXPERTISE</h4>
                    <p className = {`${Styles.expertise__details}`}>
                        We are innovators in creative web design in Los Angeles.
                        We don’t play any guessing games, but seek the facts 
                        from a range of analytics to help you get the edge.
                    </p>
                </header>
                <section className = {`${Styles.expertise__items} container`}>
                    <Item
                        image = {expertise}
                        icon = 'fa-blind'
                        heading = 'DISCOVERY'
                        details = 
                            "A thorough discovery is at the core of every
                            successful digital solution we craft. 
                            Understanding who you are building for 
                            and why you are building it is more important
                            than the colors or technology you use.
                            If you don't know these things first,
                            the rest is pointless"
                    />
                    <Item
                        image = {expertise2}

                        icon = 'fa-list'
                        heading = 'STRATEGY & PLANNING'
                        details = 
                            "A thorough discovery is at the core of every
                            successful digital solution we craft. 
                            Understanding who you are building for 
                            and why you are building it is more important
                            than the colors or technology you use.
                            If you don't know these things first,
                            the rest is pointless"
                    />
                    <Item
                        image = {expertise3}

                        icon = 'fa-volume-up'
                        heading = 'WEBSITE SOLUTIONS'
                        details = 
                            "A thorough discovery is at the core of every
                            successful digital solution we craft. 
                            Understanding who you are building for 
                            and why you are building it is more important
                            than the colors or technology you use.
                            If you don't know these things first,
                            the rest is pointless"
                    />
                    <Item
                        image = {expertise4}

                        icon = 'fa-bicycle'
                        heading = 'MOBILE & TABLE SOLUTIONS'
                        details = 
                            "A thorough discovery is at the core of every
                            successful digital solution we craft. 
                            Understanding who you are building for 
                            and why you are building it is more important
                            than the colors or technology you use.
                            If you don't know these things first,
                            the rest is pointless"
                    />
                    <Item
                        image = {expertise5}

                        icon = 'fa-mobile'
                        heading = 'INTERPRISE CMS SOLUTIONS'
                        details = 
                            "A thorough discovery is at the core of every
                            successful digital solution we craft. 
                            Understanding who you are building for 
                            and why you are building it is more important
                            than the colors or technology you use.
                            If you don't know these things first,
                            the rest is pointless"
                    />
                    <Item
                        image = {expertise6}

                        icon = 'fa-cog'
                        heading = 'DIGITAL MARKETING'
                        details = 
                            "A thorough discovery is at the core of every
                            successful digital solution we craft. 
                            Understanding who you are building for 
                            and why you are building it is more important
                            than the colors or technology you use.
                            If you don't know these things first,
                            the rest is pointless"
                    />
                    
                </section>
            </div>
        </section>
    )
}
export default Expertise;