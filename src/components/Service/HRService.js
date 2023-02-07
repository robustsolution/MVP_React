import React, { Component } from "react";
import HRServiceItems from "./HRServiceItems";

class HRService extends Component {
  render() {
    let ServiceData = this.props.ServiceData;
    return (
      <section className="py-5 border-section">
        <div className="container">
          <div className="row p_service_info mb-0">
            {ServiceData.HRService.map((item) => {
              return (
                <HRServiceItems
                  HRtitle={item.HRtitles}
                  HRdescription={item.HRdescription}
                  Hicon={item.Hicon}
                  rclass={item.rclass}
                  iclass={item.iclass}
                  key={item.id}
                />
              );
            })}
            <div className="col-lg-12 text-center"><a href=".#" className="seo_btn seo_btn_one btn_hover">View Our Products</a></div>
          </div>
        </div>
      </section>
    );
  }
}
export default HRService;
