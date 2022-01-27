import React from 'react';
import Blogs from '../../Blogs/Blogs/Blogs';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <Blogs></Blogs>
            <Footer></Footer>
        </>
    );
};

export default Home;