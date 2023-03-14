import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" description="Lorem Ipsum is simply dummy text of the pri" img={clock}></InfoCard>
            <InfoCard bgClass="bg-accent" cardTitle="Visit our location" description="Brooklyn, NY 10036, United States" img={marker}></InfoCard>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact us now" description="+000 123 456789" img={phone}></InfoCard>
        </div>
    );
};

export default Info;