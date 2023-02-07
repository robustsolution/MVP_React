import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import ChatBanner from "../components/Banner/ChatBanner";
import CoreFeatures from "../components/Features/CoreFeatures";
import ChatFeatures from "../components/Features/ChatFeatures";
import ChatIntegration from "../components/ChatIntegration";
import ChatClients from "../components/chatClients";
import FooterErp from "../components/Footer/FooterErp";
import FooterData from "../components/Footer/FooterData";

const homechat = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        nClass="m-auto"
        hbtnClass="new_btn"
      />
      <ChatBanner />
      <CoreFeatures />
      <ChatFeatures rowClass='flex-row-reverse' pClass="pr_70" col1="col-lg-6 offset-lg-1" col2="col-lg-5" icon="chat_icon.png" img1="dot.png" img2="chat_02.png" img3="chat_01.png" titleSmall="Move deals" titlebig="through your funnel – fast"
      p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
      <ChatFeatures  pClass="pl_70" col1="col-lg-6" col2="col-lg-5 offset-lg-1" icon="video_icon.png" img1="dot.png" img2="skyp_1.png" img3="skyp_2.png" titleSmall="First ever" titlebig="Video Calling Support"
      p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
      <ChatFeatures rowClass='flex-row-reverse' pClass="pr_60" col1="col-lg-6 offset-lg-1" col2="col-lg-5" icon="dashboard.png" img1="dot.png" img2="support_dashboard.jpg" img3="skyp_2.png" titleSmall="Dedicated" titlebig="Dashboard Support"
      p="Real-time tools and rich insights mean our support solution amplifies your team for an unbeatable experience." url="#"/>
      <ChatIntegration />
      <ChatClients/>
      <FooterErp fClass="event_footer_area" FooterData={FooterData} />
    </div>
  );
};
export default homechat;
