"use client"

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { setActiveValue, setIsOpen } from "@/store/header/reducer";
import MenuDrawer from "./drawer/menu-drower";
import Head from "./head";
import Nav from "./nav";
import "./style.css";

function HeaderClient({data}) {
    const {categories, cities} = data
    const dispatch = useDispatch();
    const {isOpen, activeValue } = useSelector((state) => state.cities);
    
    const location = usePathname();
const router = useRouter()
 

    useEffect(() => {
        if (isOpen) {
            const timeout = setTimeout(() => {
                dispatch(setIsOpen({ name: "isOpenCitiMenu", value: false }))
            }, 500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [activeValue.citi])



    const handleIsOpen = (name) => {
        dispatch(setIsOpen({ name, value: !isOpen[name] }))
    }


    const handleGetValue = (name, value) => {
        if(name === "citi"){
            const newUrl = location.toLowerCase().split("/")
            router.replace(`/${value.toLowerCase()}/${newUrl[2]}/${activeValue.genre}`)
            dispatch(setActiveValue({ name, value}))
        }else{
            dispatch(setActiveValue({ name, value }))
        }
    }

    return (
        <header className="header" >
            <Head 
            handleGetValue={handleGetValue} 
            handleIsOpen={handleIsOpen} 
            isOpen={isOpen} 
            activeValue={activeValue}
            citiList={cities}
            />
            <Nav 
            categories={categories} 
            handleGetValue={handleGetValue} 
            list={activeValue.category?.length ? activeValue.category : categories.find((category)=> location.split("/")[2]=== category.alias)?.childs}
            activeValue={activeValue}
            />
            <MenuDrawer
                handleGetValue={handleGetValue}
                handleIsOpen={handleIsOpen}
                isOpen={isOpen}
                activeValue={activeValue}
                citiList={cities}
            />

        </header>
    )
}

export default HeaderClient;