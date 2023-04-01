import { Outlet } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from '../../components/hamburger-menu/hamburger-menu'
import  SideMenu from '../../components/side-menu/side-menu'

const NavigationBar = () => {
    let [menuOpen,setMenuOpen] = useState(false);
    return(
        <>
            <HamburgerMenu menuButtonClick={setMenuOpen} buttonState={menuOpen}/>
            <SideMenu menuOpen={menuOpen}/>
            <Outlet/>
        </>  
    )
}
export default NavigationBar