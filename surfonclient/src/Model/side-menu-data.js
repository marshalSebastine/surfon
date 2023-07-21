import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FiIcons from "react-icons/fi";
import * as TbIcons from "react-icons/tb";

export const SideMenuData = [
    {
      title: "Home",
      path: "/",
      icon: <HiIcons.HiOutlineHome />,
      linkIndex: 0,
      cName: "nav-text"
    },
    {
      title: "Ocean Sports",
      path: "/ocean",
      icon: <MdIcons.MdSurfing style={{transform: 'rotate(45deg)'}}/>,
      cName: "nav-text",
      subnav: [
        {title: "Surf School in Kovalam",
        icon: <GiIcons.GiSchoolBag/>,
        path: "/surfing",
        linkIndex: 1,
        cName: "subnav-text"},
        {title: "Ocean Swimming",
        path: "/oceanswimming",
        linkIndex: 2,
        icon: <TbIcons.TbSwimming/>,
        cName: "subnav-text"},
        {title: "Kayaking in chennai",
        icon: <GiIcons.GiScubaMask/>,
        linkIndex: 3,
        path: "/kayaking",
        cName: "subnav-text"}
      ]
    },
    {
      title: "Edu & Camps",
      path: "/camps",
      linkIndex: 4,
      icon: <GiIcons.GiCampingTent />,
      cName: "nav-text"
    },
    {
      title: "Book a Class",
      path: "/bookclass",
      linkIndex: 5,
      icon: <MdIcons.MdClass/>,
      cName: "nav-text"
    },
    {
      title: "FAQ",
      path: "/faq",
      linkIndex: 6,
      icon: <FaIcons.FaQuestion />,
      cName: "nav-text"
    },
    {
      title: "About",
      path: "/about",
      linkIndex: 7,
      icon: <AiIcons.AiOutlineInfoCircle />,
      cName: "nav-text"
    },
    {
      title: "Contact Us",
      path: "/contact",
      linkIndex: 8,
      icon: <FiIcons.FiPhoneCall />,
      cName: "nav-text"
    }
  ];
  