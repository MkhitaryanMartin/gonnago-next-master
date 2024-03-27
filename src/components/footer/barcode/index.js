"use client"

import Image from "next/image";
import barcodeImg from "@/assets/img/code.png"
import Input from "../input";
import "./style.css";

function Barcode(){
    return (
        <div className="barcode__container">
            <Image src={barcodeImg} alt="barcode" width={138} height={138}/>
            <div className="barcode__content">
                <p className="text-one">Մենք միշտ ձգտում ենք լինել նորարար և ստեղծագործ մեր աշխատանքում, իսկ մեր ամենամեծ ճանաչումը ձեր գոհունակությունը, անվտանգությունը</p>
                <p className="text-two">Հետևեք շաբաթվա գլխավոր իրադարձություններին</p>
                <div className="barcode__input-block">
                    <Input/>
                    <button>Բաժանորդագրվել</button>
                </div>
            </div>
        </div>
    )
}

export default  Barcode