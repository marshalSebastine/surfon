import './side-menu.styles.css';
import { NavLink } from 'react-router-dom';
import { SideMenuData } from '../../Model/side-menu-data';
import * as MdIcons from "react-icons/md";
import { useRef, useState } from 'react';
import { CreateRipple } from '../../utils/styleutils';




const NavItem = ({ item }) => {
  const navitem = useRef()
  return (
    <NavLink ref={navitem} className={({ isActive, isPending }) => isPending ? 'nav-title' : isActive ? 'selectednav nav-title' : 'nav-title'}
      onClick={(event) => { CreateRipple(event) }}
      to={item.path}>
      {item.icon}
      <span style={{ padding: '0px 30px' }}>{item.title}</span>
    </NavLink>
  )
}
const ExpandableNavItem = ({ item }) => {
  const [draw, setDraw] = useState(false);
  return (
    <div className={`${draw ? 'expandednavitem' : ''}`} onClick={() => { setDraw(!draw) }}>
      <button onClick={CreateRipple} className='nav-title'>
        {item.icon}
        <span style={{ padding: '0px 30px' }}>{item.title}</span>
        <MdIcons.MdOutlineArrowDropDown className={draw ? 'expanded' : 'contracted'} />
      </button>
      <ul className={draw ? 'subnav-menu-items active' : 'subnav-menu-items'}>
        {item.subnav.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <NavLink
                onClick={(evnt) => {
                  setDraw(true)
                  CreateRipple(evnt)
                  evnt.stopPropagation()
                }}
                className={({ isActive, isPending }) => isPending ? 'subnav-title' : isActive ? "subnav-title selectednav" : "subnav-title"}
                to={item.path}>
                {item.icon}
                <span style={{ padding: '0px 20px' }} >{item.title}</span>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const SideMenu = ({ menuOpen, setMenuOpen }) => {
  const handlebackDropClick = (evnt) => {
    setMenuOpen(false)
  }
  return (
    <>
      <div onClick={handlebackDropClick} className={menuOpen ? 'sidemenubackdrop active' : 'sidemenubackdrop'} />
      <nav className={menuOpen ? 'side-menu active' : 'side-menu'}>
        <ul className='nav-menu-items'>
          {SideMenuData.map((item, index) => {
            return (
              <li key={index}
                className={item.cName}>
                {item.subnav ? <ExpandableNavItem item={item} /> : <NavItem item={item} />}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  )
}

export default SideMenu