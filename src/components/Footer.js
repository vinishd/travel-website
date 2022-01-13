import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='"footer-subscription-heading"'>
                    Join the newsletter to receive weekly emails!
                </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe anytime.
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email'
                        className='footer-input'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2> About Us </h2>
                        <Link to='/'>Our Goal</Link>
                        <Link to='/'>The UN's 17 Sustainable Development Goals</Link>
                        <Link to='/'>Careers</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
