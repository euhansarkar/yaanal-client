import React from 'react';
import SingleTestimonital from './SingleTestimonial/SingleTestimonital';

const Testimonials = () => {
    return (
        <div className='my-12'>
            <h3 className='text-2xl font-semibold text-secondary text-center uppercase'>testimonials</h3>
            <h2 className='font-bold text-4xl text-center capitalize text-primary'>what are they saying</h2>
            <SingleTestimonital></SingleTestimonital>
        </div>
    );
};

export default Testimonials;