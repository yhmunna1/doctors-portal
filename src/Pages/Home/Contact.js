import React from 'react';
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <div className='px-12 py-12'
            style={{
                background: `url(${appointment})`
            }}>

            <h3 className='text-xl font-bold text-secondary text-center'>Contact Us</h3>
            <h1 className="text-4xl font-normal text-white text-center">Stay connected with us</h1>
            <input type="text" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs block mt-3 mx-auto" />
            <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs block mt-3 mx-auto" />
            <textarea placeholder="Your message" className="textarea textarea-bordered textarea-md w-full max-w-xs block mt-3 pb-10 mx-auto" ></textarea>
            <div className='flex justify-center pt-5'>
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </div>
    );
};

export default Contact;