import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <p>{review.reviews}</p>
                <div className='flex items-center pt-5'>
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={review.img} />
                        </div>
                    </div>
                    <div>
                        <h2 class="card-title text-accent">{review.name}</h2>
                        <h4>{review.location}</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;