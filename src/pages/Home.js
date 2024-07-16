import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeBanner from '../components/HomeBanner';

const Home = () => (
  <div className="min-h-screen bg-gray-100 flex flex-col">
    <Header />
    <HomeBanner/>
    <Footer />
  </div>
);

export default Home;