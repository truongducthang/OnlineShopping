import React from 'react';
import MainSlide from './MainSlide/MainSlide';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Poster from './Poster/Poster';
import NewArrival from './NewArrival/NewArrival';
import TotalSale from './TotalSale/TotalSale';

function Home(props) {
  return (
    <div className="page-home-wrap">
      <MainSlide></MainSlide>
      <FeaturedProducts></FeaturedProducts>
      <Poster></Poster>
      <NewArrival></NewArrival>
      <TotalSale></TotalSale>
    </div>
  );
}

export default Home;
