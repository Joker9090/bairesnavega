import React from 'react';
import "@glidejs/glide/dist/css/glide.core.min.css";
import Header from '../components/globals/Header';
import OverTheFold from '../components/OverTheFold';
import Footer from '../components/Footer'
import Services from '../components/Services';
import { usc } from '../utils/helpers';
import FooterWaves from '../components/FooterWaves';
import Waves from '../components/waves';
import Gallery from '../components/Gallery';
import Slider from '../components/Slider';
import Boats from '../components/Boats'
import Coast from '../components/Coast';
import FaqItem from '../components/FaqItem';
import styles from '../styles/globals.module.scss';
import BoatsMobile from '../components/BoatsMobile';
// import MangoSlider from '../components/MangoSlider';
const Index = (props: any) => {

  return (
    <div className={usc(styles, ['main'])}>
      <Header />
      <OverTheFold />
      <Waves />
      <Boats />
      <Coast />
      {/*
      <Slider />
      */}
      <Services />
      <FaqItem />
      {/*
      <Gallery />
      */}
      <FooterWaves />
      <Footer />
    </div>
  )
}

export default Index;


