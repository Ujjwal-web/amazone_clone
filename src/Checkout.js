import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckProduct from "./CheckProduct.js";

export default function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <h3>
          Dear{" "}
          {user
            ? user.email.substring(0, user.email.lastIndexOf("@"))
            : "Guest"}
        </h3>
        <h2 className="checkout_title">Your basket items</h2>

        {basket.map((item, index) => {
          return (
            <CheckProduct
              key={index}
              id={index}
              info={item.info}
              price={item.price}
              rating={item.rating}
              imgs={item.imgs}
            />
          );
        })}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}
// export default function Checkout() {
//   const [{ basket }, dispatch] = useStateValue();
//   return (
//     <div className="checkout">
//       <div className="checkout_top">
//         <div className="checkout_left">
//           <h2 className="checkout_title">Your basket items</h2>
//         </div>
//         <div className="checkout_right">
//           <Subtotal />
//         </div>
//       </div>
//       <div className="checkout_product">
//         {basket.map((item, index) => {
//           return (
//             <CheckProduct
//               key={index}
//               id={index}
//               info={item.info}
//               price={item.price}
//               rating={item.rating}
//               imgs={item.imgs}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }
