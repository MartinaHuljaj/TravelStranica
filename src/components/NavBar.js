import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css'

function NavBar() {
    const [click, setClick]=useState(false);
    const [button, setButton]=useState(true);
    const handleClick=()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);
    

    const showButton =()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        CROKI
                        <i class='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/destinations' className='nav-links' onClick={closeMobileMenu}>
                                Destinations
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/visit-us' className='nav-links' onClick={closeMobileMenu}>
                                Visit us!
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavBar
