import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';


const Appointment = () => {
    return (
        <div className='flex justify-center items-center mt-40'
            style={{
                background: `url(${appointment})`
            }}>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctorSmall} />
            </div>
            <div className='flex-1 p-10'>
                <h3 className='text-xl font-bold text-secondary'>Appointment</h3>
                <h1 className="text-5xl font-bold text-white">Make an appointment Today</h1>
                <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default Appointment;