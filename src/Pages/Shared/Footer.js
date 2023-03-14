import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className=" px-12 pt-20 pb-12"
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}>
            <div className='footer justify-around'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link>Emergency Checkup</Link>
                    <Link>Monthly Checkup</Link>
                    <Link>Weekly Checkup</Link>
                    <Link>Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link>Fluoride Treatment</Link>
                    <Link>Cavity Filling</Link>
                    <Link>Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link>New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='flex justify-center pt-16'>
                <p>Copyright 2022 All Rights Reserved || @yhmunna</p>
            </div>
        </footer>
    );
};

export default Footer;