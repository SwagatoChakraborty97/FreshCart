import "./Products.scss";
import Product from "./Product/Product";

const Products = ({ products, innerPage, headingText }) => {
  if (products == null) {
    // console.log("NULL PRODUCTS");
    return (
      <div className="products-container">
        <div className="products skeleton" style={{ height: 100 }}></div>
        <div className="products skeleton" style={{ height: 100 }}></div>
        <div className="products skeleton" style={{ height: 100 }}></div>
      </div>
    );
  } else {
    return (
      <div className="products-container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="products">
          {products?.data?.map((item) => (
            <Product key={item.id} id={item.id} data={item.attributes} />
          ))}
        </div>
      </div>
    );
  }
};

export default Products;
