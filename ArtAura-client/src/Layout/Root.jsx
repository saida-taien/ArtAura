import { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import { Outlet } from "react-router-dom";
const Root = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark");
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);

    const [dark, setDark] = useState();
    useEffect(() => {
        if (theme === "dark") {
            setDark(1);
        }

    }, [theme])
    console.log(dark);


    return (
        <div className={`${dark ? "bg-[#0F172A] text-white" : "bg-[#fff2e2]"}   font-rubik `}>
            <Navbar theme={theme} setTheme={setTheme} dark = {dark} setDark = {setDark}></Navbar>
            <Outlet dark = {dark}></Outlet>
            <Footer dark ={dark}></Footer>
        </div>
    );
};

export default Root;

