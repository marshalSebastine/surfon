import { Outlet } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu'
import  SideMenu from '../../components/side-menu/side-menu'
import Footer from "../../components/Footer/Footer";

const NavigationBar = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    return(
        <>
            <HamburgerMenu menuButtonClick={setMenuOpen} buttonState={menuOpen}/>
            <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Outlet/>
            <Footer/>
        </>  
    )
}
export default NavigationBar