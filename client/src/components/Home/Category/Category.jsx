import { useNavigate } from "react-router-dom";
import "./Category.scss";
// import Lazy
import { ShimmerEffect } from "../../ShimmerEffect/ShimmerEffect";
import {LazyLoadImage} from "react-lazy-load-image-component";
// import Product from "../../Products/Product/Product";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  if (categories == null) { // Apply Shimmer Effect
    // console.log("NULL CATEGORIES");
    return (
      // <div className="shop-by-category">
      //   <ShimmerEffect />
      // </div>
      <div className="shop-by-category">
        <div className="categories">
          <div className="category skeleton" style={{height:100}}></div>
          <div className="category skeleton" style={{height:100}}></div>
          <div className="category skeleton" style={{height:100}}></div>
          <div className="category skeleton" style={{height:100}}></div>
        </div>
      </div>
    );
  }
  else{
  return (
    <div className="shop-by-category" >
        <div className="categories" id = "clcategories">
            {categories?.data?.map((item) => (
              <div key={item.id} className="category" onClick={() => navigate(`/category/${item.id}`)}>
                    <img src={item?.attributes?.img?.data?.attributes?.url} className="skeleton"/>
                </div>
            ))}
        </div>
    </div>
  );}
};

export default Category;

