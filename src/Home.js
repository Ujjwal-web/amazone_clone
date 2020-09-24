import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Product from "./Product.js";
const i = 0;

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_Image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        ></img>

        <div className="home_row">
          <Product
            key={i}
            info="The Lean Start up"
            price={19.99}
            rating={4}
            imgs="https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            key={i + 6}
            info="Attitude Is Everything: Change Your Attitude ... Change Your Life!"
            price={15.99}
            rating={4}
            imgs="https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            key={i + 1}
            info="Del Monte Raw Sunflower Seeds Pouch"
            price={17.99}
            rating={4}
            imgs="https://images-eu.ssl-images-amazon.com/images/I/41RKjAcOuCL._AC_SX184_.jpg"
          />
          <Product
            key={i + 2}
            info="Haldiram's Nagpur Assorted Baklava Sweets"
            price={2.99}
            rating={2}
            imgs="https://images-eu.ssl-images-amazon.com/images/I/51ZjbxZzvPL._AC_SX184_.jpg"
          />
          <Product
            key={i + 3}
            info="Sunfeast Dark Fantasy Choco Fills"
            price={4.99}
            rating={5}
            imgs="https://images-na.ssl-images-amazon.com/images/I/71wFB1Gvy4L._SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            key={i + 4}
            info="eAirtec 102 cm (40 inches) HD Ready LED TV 40DJ (Black) (2020 Model)"
            price={34.99}
            rating={5}
            imgs="https://images-na.ssl-images-amazon.com/images/I/81P3rFYr9LL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
