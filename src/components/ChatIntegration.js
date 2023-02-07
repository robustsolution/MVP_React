import React, { useState } from "react";
import HomeSectionTitle from "./Home/HomeSectionTitle";
import image1 from "../img/hosting/h_blog1.jpg";
import image2 from "../img/hosting/h_blog2.jpg";
import { Reveal } from "react-reveal";
const ChatIntegration = () => {
  const [title, setTitle] = useState("Innovative R&D");
  const [description, setDescription] = useState(
    "Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond chip shop chancer my lady gormless brilliant the full monty lavatory, buggered loo horse play cracking goal butty young delinquent zonked no biggie.!"
  );
  const [image, setImage] = useState(image1);

  return (
    <>
      <div className="container">
        <HomeSectionTitle Title="HOW WE DO IT" TitleP="Our Differentiors" />
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            onClick={() => {setTitle("Innovative R&D"); setDescription("Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond"); setImage(image1);}}
            style={{ cursor: "pointer" }}
          >
            <div href="/#" className={`s_integration_item ${title=="Innovative R&D"?"active":""}`}>
              <img src={require("../img/new-home/kissmetrics.png")} alt="" />
              <h5>Innovative R&D</h5>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            onClick={() => {setTitle("Metorik"); setDescription("Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond"); setImage(image2);}}
            style={{ cursor: "pointer" }}
          >
            <div href="/#" className={`s_integration_item ${title=="Metorik"?"active":""}`}>
              <img src={require("../img/new-home/metorik.png")} alt="" />
              <h5>Metorik</h5>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            onClick={() => {setTitle("Nicereply"); setDescription("Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond"); setImage(image1);}}
            style={{ cursor: "pointer" }}
          >
            <div href="/#" className={`s_integration_item ${title=="Nicereply"?"active":""}`}>
              <img src={require("../img/new-home/nicereply-1.png")} alt="" />
              <h5>Nicereply</h5>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            onClick={() => {setTitle("Software Updater"); setDescription("Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond"); setImage(image2);}}
            style={{ cursor: "pointer" }}
          >
            <div href="/#" className={`s_integration_item ${title=="Software Updater"?"active":""}`}>
              <img src={require("../img/new-home/update.png")} alt="" />
              <h5>Software Updater</h5>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            onClick={() => {setTitle("Campfire"); setDescription("Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond"); setImage(image1);}}
            style={{ cursor: "pointer" }}
          >
            <div href="/#" className={`s_integration_item ${title=="Campfire"?"active":""}`}>
              <img src={require("../img/new-home/campfire.png")} alt="" />
              <h5>Campfire</h5>
            </div>
          </div>
          <div
            className="col-lg-2 col-md-4 col-sm-6"
            onClick={() => {setTitle("Webhooks"); setDescription("Bender cobblers chap grub sloshed up the duff I fantastic owt to do with me at public school, James Bond"); setImage(image2);}}
            style={{ cursor: "pointer" }}
          >
            <div href="/#" className={`s_integration_item ${title=="Webhooks"?"active":""}`}>
              <img src={require("../img/new-home/webhooks.png")} alt="" />
              <h5>Webhooks</h5>
            </div>
          </div>
        </div>
        <div className="row flex-row-reverse app_feature_info">
          <div className="col-lg-6">
            <img className="img-fluid" src={image} alt="" data-xblocker="passed" />
          </div>
          <div className="col-lg-6">
            <Reveal bottom cascade>
              <div className="app_featured_content">
                <h2 className="f_p f_size_30 f_700 main_color l_height45 pr_70 mb-30">
                  {title}
                </h2>
                <p className="f_400">{description}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatIntegration;
