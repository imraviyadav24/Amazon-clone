import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
    <div className="home">
        <div className="home_container">
            <img className="home_image" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
            />

            <div className="home_row">
                <Product 
                id="4567889"
                title="The lean startup"
                price={29.99}
                image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
                rating={5}
                />
                <Product 
                id="3445679"
                title="OnePlus 8T 5G (Aquamarine Green, 12GB RAM, 256GB Storage)"
                price={700}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71m05O2uNdL._SL1500_.jpg"
                />
               
            </div>

            <div className="home_row">
                <Product 
                id="223455656"
                title="
                Noise Colorfit Pro 2 Full Touch Control Smart Watch Jet Black"
                price={199.9}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6113mS%2BxhyL._SL1500_.jpg"/>
              <Product 
              id="234567687"
              title="All-new Echo Dot (4th Gen) | Next generation smart speaker with improved bass and Alexa (Blue)"
              price={50}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/610q5XD317L._SL1000_.jpg"
              />
                <Product 
                id="2324565768"
                title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model, 8th Generation)"
                price={1000}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/815a%2BXjrgvL._SL1500_.jpg"
                />
            </div>

            <div className="home_row">
                <Product 
                id="54678989"
                title="Samsung 125 cm (50 Inches) Wondertainment Series Ultra HD LED Smart TV UA50TUE60AKXXL (Titan Gray) (2020 model)"
                price={600}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71CMPTwja5L._SL1500_.jpg"
                />
            </div>
        </div>
    </div>
    );
}

export default Home;