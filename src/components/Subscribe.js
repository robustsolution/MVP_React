import React, {Component} from 'react';
import StudySlider from '../components/StudySlider';
import SeoTitle from '../components/Title/SeoTitle';
import Testimonial from '../components/Testimonial/Testimonial';
import Fade from 'react-reveal/Fade'

class Subscribe extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <React.Fragment>
                <section className="seo_subscribe_area">
                    <div className="overlay_img"></div>
                    <div className="cloud_img"><img src={require('../img/seo/cloud.png')} alt=""/></div>
                    <div className="container">
                        <SeoTitle Title="Check your Website’s SEO!" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikeyWhy gormless, pear shaped.!"/>
                        <form action="#" className="row seo_subscribe_form">
                            <div className="input-group col-lg-5 col-md-5 col-sm-6">
                                <input type="url" name="website" id="website" placeholder="Web URL" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-5 col-md-4 col-sm-6">
                                <input type="email" name="email" id="emails" placeholder="Email" className="form-control"/>
                            </div>
                            <div className="input-group col-lg-2 col-md-3 col-sm-12">
                                <input type="submit" name="submit" value="Check" className="check-btn"/>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="case_studies_area sec_pad">
                    <div className="container">
                        <SeoTitle Title="Our case studies" TitleP="The full monty burke posh excuse my French Richard cheeky bobby spiffing crikey Why gormless, pear shaped.!"/>
                        <StudySlider/>
                    </div>
                </section>
                <section className="seo_fact_area sec_pad">
                    <div className="home_bubble">
                        <div className="bubble b_one"></div>
                        <div className="bubble b_three"></div>
                        <div className="bubble b_four"></div>
                        <div className="bubble b_six"></div>
                        <div className="triangle b_eight" data-parallax='{"x": 120, "y": -10}'><img src="img/seo/triangle_one.png" alt=""/></div>
                    </div>
                    <div className="container">
                        <SeoTitle Title='Over 1200+ completed work & Still counting.'/>
                        <div className="seo_fact_info">
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter one">693</div>
                                    <p>Happy Clients</p>
                                </div>
                            </div>
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter two">276</div>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="seo_fact_item">
                                <div className="text">
                                    <div className="counter three">102</div>
                                    <p>SEO Winners</p>
                                </div>
                            </div>
                            <div className="seo_fact_item last">
                                <div className="text">
                                    <div className="counter four">93</div>
                                    <p>Experience</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonial tClass="testimonial_area sec_pad" FooterData={FooterData}/>
                <section className="seo_partner_logo_area sec_pad">
                    <div className="container">
                        <div className="seo_sec_title text-center mb_70">
                            <Fade bottom><h2>Relied on marketers, trusted by engineers,<br/> and beloved by executives, everyw here.</h2></Fade>
                        </div>
                        <div className="partner_logo_area_four">
                            <div className="row partner_info">
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_01.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_02.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_03.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_04.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_05.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_06.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_07.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_08.png')} alt=""/></a>
                                </div>
                                <div className="logo_item">
                                    <a href=".#"><img src={require('../img/seo/logo_09.png')} alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="seo_call_to_action_area sec_pad">
                    <div className="container">
                        <div className="seo_call_action_text">
                            <h2>Ready to get started?<br/> lt's fast, free and very easy!</h2>
                            <a href="/" className="about_btn">Get a free Estimate</a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Subscribe;