import React from "react";
import Header from "../../components/Header/Header";
import Jhutta from "../../assets/images/shoe.png";
function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-page-content flex">
        <div className="p-p-c-left dark-bg flex column f-jc-sb">
          <div className="left-logo-cont fill flex f-c-sb">
            <a href="#" className="brand-link">
              <div className="brand-logo">
                <img
                  src="https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"
                  alt=""
                  className="brand-logo-img"
                />
              </div>
            </a>
          </div>
          <div className="left-footer fill flex f-c-sa">
            <a href="#" className="facebook-link">
              Facebook
            </a>
            <a href="#" className="instagram-link">
              Instagram
            </a>
            <a href="#" className="twitter-link">
              Twitter
            </a>
          </div>
        </div>
        <div className="p-p-c-right light_bg">
          <Header />
          <div className="jutta-cont flex f-pc">
            <img src={Jhutta} alt="shoe" className="product-img" />
          </div>
          <div className="jhutta-detail-cont">details</div>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
