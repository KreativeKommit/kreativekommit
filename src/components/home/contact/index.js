import React, { useEffect, useRef } from 'react';
import Styles from './contact.module.scss';
import {reduxForm, Field} from 'redux-form';
import ExampleComponent from '../../shared/recaptcha';



  

const renderField = ({ input, label, type,className, meta: { touched, error } }) =>{
   return (
        <div className = {className} >
            <label htmlFor = {label}>{label}</label>
            <div>
            <input {...input} type={type} placeholder id = {label} />
            {touched && error && <span>{error}</span>}
            </div>
        </div>
        );
} 
const Contact = props => {
    const formRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(()=>{
        const handleScroll = e => {
            if(infoRef.current && formRef.current){
                const formRect = formRef.current.getBoundingClientRect();
                const infoRect = infoRef.current.getBoundingClientRect();
    
                if (
                    formRect.top >= 0 &&
                    formRect.bottom - formRect.height/1.2 <= (window.innerHeight || document.documentElement.clientHeight)
                ){
                    formRef.current.style.transform = 'translateX(0)';
                    formRef.current.style.opacity = '1';
                }
                if (
                    infoRect.top >= 0 &&
                    infoRect.bottom - infoRect.height/1.2 <= (window.innerHeight || document.documentElement.clientHeight)
                ){
                    infoRef.current.style.transform = 'translateX(0)';
                    infoRef.current.style.opacity = '1';
    
                }
            }
            
        }
        document.addEventListener('scroll',handleScroll)
    },[formRef,infoRef])
    const categories = [
                            'Discovery/Strategy',
                            'User Exerience (UX)',
                            'Website Design',
                            'Website Development',
                            'Application Development',
                            'Mobile Apps',
                            'E-Commerce',
                            'Marketing/Advertising',
                            'Social Media',
                            'Other'
                        ]
    
    const renderServicesOptions = ({ input,className, meta: { touched, error } }) => (
        <div className = {className}>
            <label htmlFor = 'service'>
                Service
            </label>
          <select id = 'service' {...input} className = {Styles.contact__content__form__select__box}>
            <option value="">please select </option>
            {categories.map(val => (
              <option value={val} key={val}>
                {val}
              </option>
            ))}
          </select>
          {touched && error && <span>{error}</span>}
        </div>
      )

    const handleSubmit = data => {

    }
    return (
        <section className = {`${Styles.contact}`}>
            <div className = {`${Styles.contact__overlay}`}></div>
            <div className = {`${Styles.contact__content}`} >
                <form 
                    className = {`${Styles.contact__content__form}`} 
                    onSubmit = {props.handleSubmit(handleSubmit)}
                    
                >
                    <div className = {`${Styles.contact__content__form__content}`} ref = {formRef}>
                        <h4>CONTACT US</h4>
                        <Field 
                            name = 'firstName' 
                            component = {renderField}
                            label = 'First Name*'
                            type = 'text'
                            className =
                            {` ${Styles.contact__content__form__input} `}
                        />
                        <Field 
                            name = 'lastName'
                            component = {renderField}
                            label = 'Last Name*'
                            type = 'text'
                            className =
                            {` ${Styles.contact__content__form__input} `}
                        />
                        
                        <Field 
                            name = 'email'
                            component = {renderField}
                            label = 'Email*'
                            type = 'email'
                            className =
                            {` ${Styles.contact__content__form__input} `}
                        />
                        <div className = {`${Styles.contact__content__form__halfs}`}>
                            <Field
                                name = 'companyName'
                                component = {renderField}
                                label = 'Company Name'
                                type = 'text'
                                className =
                                {` ${Styles.contact__content__form__input} ${Styles.contact__content__form__inputHalf}`}

                            />
                            <Field 
                                name = 'phone'
                                component = {renderField}
                                label = 'Phone*'
                                type = 'phone'
                                className =
                                    {` ${Styles.contact__content__form__input} ${Styles.contact__content__form__inputHalf}`}
                            />
                        </div>
                        

                        <Field 
                            name = 'service'
                            component = {renderServicesOptions}
                            className = {`${Styles.contact__content__form__select}`}
                        />
                        <div className = {`${Styles.contact__content__form__box}`}>
                            <label htmlFor =  'massageBox'>
                                Message*
                            </label>
                            <Field
                                name = 'massage'
                                component = 'textarea'
                                id = 'massageBox'
                                rows = '6'
                                className = {`${Styles.contact__content__form__box__field}`}
                            />
                            
                        </div>
                        <div>
                             <ExampleComponent/>
                            <button className = {Styles.contact__content__form__button}>Submit</button>
                        </div>
                            
                    </div>
                </form>
                <div className = {`${Styles.contact__content__info}`} ref = {infoRef} >
                    <h4 className = {`${Styles.contact__content__info__heading}`}>ENGAGE & EXPERIENCE</h4>
                    <a href = '/' className = {`${Styles.contact__content__info__phone}`}>07447 616226</a>
                    <a href = '/' className = {`${Styles.contact__content__info__place}`}>
                        4 Copeland Drive<br />
                       Standish, Greater Manchester, WN6 0XR
                    </a>
                    <p className = {`${Styles.contact__content__info__site}`}>
                        <a href = '/'>hello@kreativekommit.com</a>
                    </p>
                    <p className = {`${Styles.contact__content__info__blog}`}>
                    RECOMMENDED FROM OUR <a href = '/'>[BLOG]</a>
                    </p>
                    <a href = '/' className = {`${Styles.contact__content__info__question}`}>
                         What is Splash Screen? How to Use Splash Screens the Right Way
                    </a>
                    <p className = {`${Styles.contact__content__info__answer}`}>
                        What is Splash Screen? Splash screen is the first graphical notification
                        you receive when you visit any app. It can even appear as an 
                        introductory screen of an application. It also signifies
                        that you have to wait for a few seconds before landing 
                        on the actual screen of the application. Splash screen 
                        usually appears in full screen that covers the entire screen. 
                        It is used to make visitors login before...
                    </p>
                    <a href = '/' className = {`${Styles.contact__content__info__question}`}>
                        What is Nofollow Link | How to Use and Check Nofollow Links
                    </a>
                    <p className = {`${Styles.contact__content__info__answer}`}>
                        The link profile of your company’s website is one of the 
                        most important elements of your search engine optimization 
                        (SEO) ecology. It’s essential to know how your site links 
                        within its many pages as well as how it links to and from 
                        external sites. One of the most important yet most often 
                        overlooked aspects of websites’ link profiles is their 
                        nofollow links. Your link profile is incredibly valuable....
                    </p>
                </div>
            </div> 
        </section>
    )
}
const validate = (formData) => {
    const errors = {};
    return errors;
}
export default reduxForm(
    {
        form: 'contact', //Form name is same
        destroyOnUnmount: false,
        forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
        validate
    }
)(Contact);