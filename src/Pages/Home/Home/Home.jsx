import React from 'react';
import Banner from '../Banner/Banner';
import PopularProducts from '../PopularProducts/PopularProducts';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import PopularFoods from '../PopularFoods/PopularFoods';
import MobileApp from '../MobileApp/MobileApp';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <FeaturedFoods></FeaturedFoods>
            <PopularFoods></PopularFoods>
            <MobileApp></MobileApp>
        </div>
    );
};

export default Home;