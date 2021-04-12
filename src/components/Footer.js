import React from 'react'
import { Button } from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Fotter() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the adventure newsletter to receive all travel news
                </p>
                <div className='input-areas'>
                    <form>
                        <input type='email' name='email' placeholder='Your Email' className='footer-input'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About us</h2>
                        <Link to='/'>Terms of services</Link>
                        <Link to='/'>Our partners</Link>
                        <Link to='/'>Visit us!</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link className='social-logo'>
                            CRO <i className='fab fa-typo3'/>
                        </Link>
                    </div>
                    <small class='website-rights'>TRVL © 2020</small>
                    <div className='social-icons'>
                        <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                             <i class='fab fa-facebook-f' />
                        </Link>
                        <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                             <i class='fab fa-instagram' />
                        </Link>
                        <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube' >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link class='social-icon-link twitter'  to='/' target='_blank' aria-label='Twitter'>
                            <i class='fab fa-twitter' />
                        </Link>
                        <Link   class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
                            <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Fotter
