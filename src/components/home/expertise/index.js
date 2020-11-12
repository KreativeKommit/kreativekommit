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
                        We are innovators in creative web design in Greater Manchester.
                        We don’t play guessing games, but seek facts 
                        from a range of analytics to help you get an edge.
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
                            Understanding who we are building for 
                            and why we are building it is as important
                            than the colors or technology used."
                    />
                    <Item
                        image = {expertise2}

                        icon = 'fa-list'
                        heading = 'STRATEGY & PLANNING'
                        details = 
                            "Strategy & planning is everything. The needs 
                            of digital consumers are not the same today as 
                            they were just 6 months ago. We have the experience and 
                            knowledge needed to create a smart strategy for 
                            your business to solve your digital problems."
                    />
                    <Item
                        image = {expertise3}

                        icon = 'fa-volume-up'
                        heading = 'WEBSITE SOLUTIONS'
                        details = 
                            "Web design and development is in our roots. Designing 
                            and developing for numerous screen sizes and devices 
                            takes precision, which is why our bespoke hand-crafted designs, 
                            and developments are second to none."
                    />
                    <Item
                        image = {expertise4}

                        icon = 'fa-bicycle'
                        heading = 'MOBILE & TABLET SOLUTIONS'
                        details = 
                            "We can deliver an engaging experience on 
                            mobile devices of all shapes and sizes. We know the best 
                            practices to follow and where we can push the envelope to 
                            deliver delight."
                    />
                    <Item
                        image = {expertise5}

                        icon = 'fa-mobile'
                        heading = 'ENTERPRISE CMS SOLUTIONS'
                        details = 
                            "If you are looking for the power and efficiencies found with 
                            enterprise content management solutions, we can help. Our 
                            enterprise solutions enable you to leverage enterprise content 
                            management platforms to self manage your website."
                    />
                    <Item
                        image = {expertise6}

                        icon = 'fa-cog'
                        heading = 'DIGITAL MARKETING'
                        details = 
                            "You've spent a lot of time and money getting your business to 
                            where it is today. Let us help you take your business to the next 
                            level with our digital marketing solutions. We'll make sure your
                            company gets the exposure it needs to thrive."
                    />
                    
                </section>
            </div>
        </section>
    )
}
export default Expertise;