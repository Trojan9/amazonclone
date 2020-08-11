import React from 'react'
import { Icon } from '@material-ui/core'
import "./Home.css";
import Product from './product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt=""></img>
            <div className="home__row">
            <Product id="123456"
            title="AmazonBasics MFi-Certified Lighting to USB A Cable for Apple iPhone and iPad - 6 Feet (1.8 Meters) - 2 -Pack - White"
            image="https://images-na.ssl-images-amazon.com/images/I/613Wvm%2BVqKL._AC_SL1500_.jpg"
            price={17.99}
            rating={4}
            
            ></Product>
            <Product id="1234567"
            title="BENGOO G9000 Stereo Gaming Headset for PS4, PC, Xbox One Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo PS3 Games"
            image="https://images-na.ssl-images-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
            price={17.99}
            rating={5}
            
            ></Product>
            </div>
            <div className="home__row">
            <Product id="1234568"
            title="Victrola Vintage 3-Speed Bluetooth Portable Suitcase Record Player with Built-in Speakers | Upgraded Turntable Audio Sound| Includes Extra Stylus | Turquoise, Model Number: VSC-550BT-TQ"
            image="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
            price={44.98 }
            rating={4}
            
            ></Product>
            <Product id="1234563"
            title="Certified Refurbished eero Beacon mesh WiFi range extender (add-on to eero WiFi systems)"
            image="https://images-na.ssl-images-amazon.com/images/I/41pkOUT6jZL._SL1000_.jpg"
            price={13.99}
            rating={4}
            
            ></Product>
            <Product id="1234561"
            title="
            Fire HD 10 Tablet (10.1 1080p full HD display, 32 GB) – Black"
            image="https://images-na.ssl-images-amazon.com/images/I/61g9%2BJRbdDL._AC_SL1000_.jpg"
            price={99.99}
            rating={5}
            
            ></Product>
            </div>
            <div className="home__row">
            <Product id="12345677"
            title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)"
            image="https://images-na.ssl-images-amazon.com/images/I/81mHL0psH-L._AC_SL1500_.jpg"
            price={129.99}
            rating={4}
            
            ></Product>
            
            </div>
        </div>

    )
}

export default Home
