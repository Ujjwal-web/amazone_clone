import React from "react";
import { Link } from "react-router-dom";
import CheckProduct from "./CheckProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_Container">
        <h1>Checkout {<Link to="./Checkout">{basket.length}</Link>}</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item, index) => (
              <CheckProduct
                key={index}
                id={index}
                info={item.info}
                price={item.price}
                rating={item.rating}
                imgs={item.imgs}
              />
            ))}
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_method">
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
