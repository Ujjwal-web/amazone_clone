import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./StateProvider";

var id = 0;
function Product({ info, price, rating, imgs }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    id = id + 1;
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        info: info,
        price: price,
        rating: rating,
        imgs: imgs,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <Link to="/productdetail">
          <p className="product_title">{info}</p>
        </Link>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={imgs}></img>
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product;
