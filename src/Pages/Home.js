import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Service from '../components/Service/Service';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import HomeBanner from '../components/Banner/HomeBanner';
import FooterTwo from '../components/Footer/FooterTwo';
import FooterThree from '../components/Footer/FooterThree';
import FooterSecurity from '../components/Footer/FooterSecurity';
import WhatWdDo from '../components/Home/WhatWdDo';
import HowWeDoIt from '../components/Home/HowWeDoIt';
import CustomFooter from '../components/Footer/CustomFooter';

export const Home = () => (
    <div className="body_wrapper">
        <CustomNavbar slogo="sticky_logo" cClass="custom_container p0" mClass="menu_four" nClass="w_menu" />
        <HomeBanner />
        <WhatWdDo />
        <HowWeDoIt />
        <CustomFooter />
    </div>
)