import React from 'react';
import { useTranslation } from "react-i18next";
const HomeBanner =()=> {
    const { t, i18n } = useTranslation();
    return (
        <section className="home_banner_area">
            <img className="p_absoulte s_shap" src={require ("../../img/home-security/shap.png")} alt=""/>
            <div className="s_round one"></div>
            <div className="s_round two"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex align-items-center pt-5 mt_70 mt-lg-0 pt-lg-0">
                        <div className="security_banner_content">
                            <h2 className="wow fadeInUp" data-wow-delay="0.3s">Your Unified Solution For PC Security and Performance</h2>
                            <p className="f_400 w_color l_height28 wow fadeInUp" data-wow-delay="0.4s">Download Free Antivirus and System Optimization Utility</p>
                            <div className="action_btn d-flex align-items-center mt_40 wow fadeInUp" data-wow-delay="0.6s">
                                <a href="/#" className="btn_hover app_btn main-btn mx-auto mx-lg-0">{t("navmenu.request_demo")}</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div className="new_startup_img">
                            <img src={require ("../../img/home-security/banner.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HomeBanner;