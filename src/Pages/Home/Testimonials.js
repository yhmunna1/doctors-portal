import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: people2
        },
        {
            _id: 2,
            name: 'Winson Herry',
            location: 'California',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: people3
        },
    ];

    return (
        <section className='px-12 py-12'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-bold text-secondary'>Testimonial</h3>
                    <h1 class="text-4xl font-normal text-accent">What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} alt="" className='w-24 lg:w-48' />
                </div>
            </div>

            {/* Reviews */}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;