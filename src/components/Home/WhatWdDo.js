import React from "react";
import Reveal from "react-reveal";
import HomeSectionTitle from "./HomeSectionTitle";
import HRService from "../Service/HRService";
import ServiceData from "../Service/ServiceData";
import image from "../../img/hosting/h_blog1.jpg";

export default function WhatWdDo() {
  return (
    <>
      <section className="app_featured_area py-0" id="features">
        <div className="container">
          <HomeSectionTitle Title="WHAT WE DO" />
          <div className="row flex-row-reverse app_feature_info">
            <div className="col-lg-6">
              <img className="img-fluid" src={image} alt="" data-xblocker="passed" />
            </div>
            <div className="col-lg-6">
              <Reveal bottom cascade>
                <div className="app_featured_content">
                  <h2 className="f_p f_size_30 f_700 main_color l_height45 pr_70 mb-30">
                    Inspired design for the digital app landing
                  </h2>
                  <p className="f_400">
                    Bender cobblers chap grub sloshed up the duff I fantastic
                    owt to do with me at public school, James Bond chip shop
                    chancer my lady gormless brilliant the full monty lavatory,
                    buggered loo horse play cracking goal butty young delinquent
                    zonked no biggie.!
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <HRService ServiceData={ServiceData} />
    </>
  );
}
