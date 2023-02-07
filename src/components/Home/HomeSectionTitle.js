import React, {Component} from 'react';

class HomeSectionTitle extends Component {
    render(){
        var {Title, TitleP} = this.props;
        return(
            <div className="text-center home-section-title">
                <h2 className="mb_0  wow fadeInUp py-5" data-wow-delay="0.3s">{Title}</h2>
                {TitleP&&<p className="mb-0 pb-5 title_p main_color wow fadeInUp" data-wow-delay="0.6s">{TitleP}</p>}
                <span className="bottom_line wow fadeInLeft" data-wow-delay="0.9s"></span>
            </div>
        )
    }
}
export default HomeSectionTitle;