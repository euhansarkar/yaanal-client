import React from 'react';
import Banner from '../Banner/Banner';
import PopularProducts from '../PopularProducts/PopularProducts';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import PopularFoods from '../PopularFoods/PopularFoods';
import MobileApp from '../MobileApp/MobileApp';
import Testimonials from '../Testimonials/Testimonials';
import SpecialDIscounts from '../SpecialDiscounts/SpecialDIscounts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <FeaturedFoods></FeaturedFoods>
            <PopularFoods></PopularFoods>
            <MobileApp></MobileApp>
            <Testimonials></Testimonials>
            <SpecialDIscounts></SpecialDIscounts>
        </div>
    );
};

export default Home;