"use client"

import Barcode from "./barcode";
import InstagramIcon from "../svg/instagram";
import { useState } from "react";
import "./style.css";

function FooterClent() {
    const [activeIndex, setActiveIndex] = useState("");

    const handleH4Click = (text) => {
        if (activeIndex === text) {
            setActiveIndex("");
        } else {
            setActiveIndex(text);
        }
    };

    return (
        <footer className="footer">
            <div className="footer__container">
                <Barcode />
               <div className="text-block">
               <div className={activeIndex === "GonnaGo" ? "display-flex show-text" : "display-flex"}>
                    <h4 onClick={() => handleH4Click("GonnaGo")}>GonnaGo</h4>
                    <p>Մեր մասին</p>
                    <p>Գաղտնիության քաղաքականություն</p>
                    <p>Օգտվելու կանոններ </p>
                    <p>Տոմսերի վերադարձ </p>
                </div>
                <div className={activeIndex === "Partners" ? "display-flex show-text" : "display-flex"}>
                    <h4 onClick={() => handleH4Click("Partners")}>Գործընկերներ և Կազմակերպիչներ</h4>
                    <p>Միջոցառումների կազմակերպիչների համար</p>
                    <p>Կորպորատիվ հաճախորդների համար</p>
                </div>
                <div className={activeIndex === "Contacts" ? "display-flex show-text" : "display-flex"}>
                    <h4 onClick={() => handleH4Click("Contacts")}>հեռ. և էլ. հասցե</h4>
                    <p>+374 99 15 16  17</p>
                    <p>gonnago@gmail.com</p>
                </div>
                <div className="display-flex">
                    <h4>Հետադարձ կապ</h4>
                    <InstagramIcon />
                </div>
               </div>
            </div>
            <div className="addres-block">
                <p>&copy; 2023 GonnaGo: Բոլոր իրավունքները պաշտպանված են</p>
                <p>Designed & Develop by Brain Fors</p>
            </div>
        </footer>
    );
}

export default FooterClent;
