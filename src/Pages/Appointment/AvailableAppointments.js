import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='px-12'>
            <h5 className='text-secondary text-center font-bold'>Available Appointments on: {format(date, 'PP')}</h5>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal treatment={treatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;