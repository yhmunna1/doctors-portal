import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }


    return (
        <div className='py-12'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary text-center">Booking For: {name}</h3>

                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered input-md w-full max-w-xs block mt-3 mx-auto" />
                        <select name='slot' className="select select-bordered w-full max-w-xs block mt-3 mx-auto">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Your Name" className="input input-bordered input-md w-full max-w-xs block mt-3 mx-auto" />
                        <input type="email" name='email' placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs block mt-3 mx-auto" />
                        <input type="phone" name='phone' placeholder="Phone Number" className="input input-bordered input-md w-full max-w-xs block mt-3 mx-auto" />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs block mt-3 mx-auto text-white" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;