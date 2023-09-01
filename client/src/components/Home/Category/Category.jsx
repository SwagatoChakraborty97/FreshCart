import { useNavigate } from "react-router-dom";
import "./Category.scss";
// import Product from "../../Products/Product/Product";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category" >
        <div className="categories" id = "clcategories">
            {/* {console.log(categories)} */}
            {categories?.data?.map((item) => (
              <div key={item.id} className="category skeleton" onClick={() => navigate(`/category/${item.id}`)}>
                    <img src={item?.attributes?.img?.data?.attributes?.url} loading="lazy" className="skeleton"/>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Category;

