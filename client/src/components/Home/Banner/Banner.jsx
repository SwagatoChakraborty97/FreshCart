import "./Banner.scss";
// Importing Banner Image
import BannerImg from "../../../assets/banner.png";
const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>FRESH</h1>
          <p>
          Discover the joy of hassle-free shopping with our user-friendly interface and convenient search bar, making it easy to find your favorite products. Indulge in a delightful shopping experience as you explore our handpicked assortment of fresh fruits, crisp vegetables, organic offerings, and artisanal goods sourced from trusted suppliers.
          </p>
          {/* Adding cta - call to action */}
          <div className="ctas">
            <div className="banner-cta" onClick={() => window.location.replace("#clabout")}>Read More</div>
            <div className="banner-cta v2"  onClick={() => window.location.replace("#clcategories")}>Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
