import './side-menu.styles.css';
import { Link } from 'react-router-dom';
import { SideMenuData } from '../../Model/side-menu-data';
import * as MdIcons from "react-icons/md";
import { useRef, useState } from 'react';
import { CreateRipple } from '../../utils/styleutils';


const NavItem = ({ item, selectedIndex, setIndex }) => {
  const navitem = useRef()
  return (
    <Link ref={navitem} className={`nav-title ${item.linkIndex === selectedIndex ? 'selectednav' : ''}`}
      onClick={(event) => {
        setIndex(item.linkIndex)
        CreateRipple(event)
      }}
      to={item.path}>
      {item.icon}
      <span style={{ padding: '0px 30px' }}>{item.title}</span>
    </Link>
  )
}
const ExpandableNavItem = ({ item, setIndex, selectedIndex }) => {
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
              <Link className={`subnav-title ${item.linkIndex === selectedIndex ? 'selectednav' : ''}`}
                to={item.path}
                onClick={() => { setIndex(item.linkIndex) }}>
                {item.icon}
                <span style={{ padding: '0px 20px' }} >{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const SideMenu = ({ menuOpen,setMenuOpen }) => {
  const [selecteNavItemIndex, setNavIndex] = useState(0)
  const handlebackDropClick = (evnt) => {
    setMenuOpen(false)
  } 
  return (
    <>
      <div onClick={handlebackDropClick} className={menuOpen ? 'sidemenubackdrop active' : 'sidemenubackdrop'}/>
      <nav className={menuOpen ? 'side-menu active' : 'side-menu'}>
        <ul className='nav-menu-items'>
          {SideMenuData.map((item, index) => {
            return (
              <li key={index}
                className={item.cName}>
                {item.subnav ? <ExpandableNavItem setIndex={setNavIndex}
                  selectedIndex={selecteNavItemIndex}
                  item={item} /> : <NavItem setIndex={setNavIndex}
                    selectedIndex={selecteNavItemIndex}
                    item={item} />}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  )
}

export default SideMenu