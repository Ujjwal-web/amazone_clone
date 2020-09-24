import React from "react";
import "./CheckProduct.css";
import { useStateValue } from "./StateProvider";

function CheckProduct(props) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () =>
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });

  return (
    <div className="check_product">
      <img src={props.imgs}></img>
      <div className="check_product_info">
        <p className="check_product_title">{props.info}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="check_product_rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button className="check_button" onClick={removeFromBasket}>
        Remove from basket
      </button>
      </div>
      
    </div>
  );
}

export default CheckProduct;
