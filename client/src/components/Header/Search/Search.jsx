import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e);
    setQuery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (!query.length) {
    data = null;
  }
  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          autoFocus
          type="text"
          placeholder="Try Searching Bread...😋"
          value={query}
          onChange={handleChange}
        />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see products you are looking for.
        </div>
        <div className="search-results">
          {data?.data?.map((item) => (
            <div
              className="search-result-item"
              key={item?.id}
              onClick={() => {
                setShowSearch(false);
                navigate("/product/" + item.id);
              }}
            >
              <div className="image-container">
                <img
                  src={
                    // process.env.REACT_APP_DEV_URL +
                    item?.attributes?.img?.data?.attributes?.url
                  }
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Search;
