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
      title: "Surfing",
      path: "/surfing",
      icon: <MdIcons.MdSurfing style={{transform: 'rotate(45deg)'}}/>,
      cName: "nav-text",
      subnav: [
        {title: "Surf School in Kovalam",
        icon: <GiIcons.GiSchoolBag/>,
        path: "/a",
        linkIndex: 1,
        cName: "subnav-text"},
        {title: "Ocean Swimming",
        path: "/b",
        linkIndex: 2,
        icon: <TbIcons.TbSwimming/>,
        cName: "subnav-text"},
        {title: "Scuba diving in chennai",
        icon: <GiIcons.GiScubaMask/>,
        linkIndex: 3,
        path: "/c",
        cName: "subnav-text"}
      ]
    },
    {
      title: "Ocean Sports",
      path: "/ocean",
      linkIndex: 4,
      icon: <MdIcons.MdOutlineSports />,
      cName: "nav-text"
    },
    {
      title: "Edu & Camps",
      path: "/camps",
      linkIndex: 5,
      icon: <GiIcons.GiCampingTent />,
      cName: "nav-text"
    },
    {
      title: "Book a Class",
      path: "/bookclass",
      linkIndex: 6,
      icon: <MdIcons.MdClass/>,
      cName: "nav-text"
    },
    {
      title: "Team Outing Activities",
      path: "/team-outing-activities",
      linkIndex: 7,
      icon: <RiIcons.RiGroup2Line />,
      cName: "nav-text"
    },
    {
      title: "FAQ",
      path: "/faq",
      linkIndex: 8,
      icon: <FaIcons.FaQuestion />,
      cName: "nav-text"
    },
    {
      title: "Team Outing Activities",
      path: "/team-outing-activities",
      linkIndex: 9,
      icon: <RiIcons.RiGroup2Line />,
      cName: "nav-text"
    },
    {
      title: "About",
      path: "/about",
      linkIndex: 10,
      icon: <AiIcons.AiOutlineInfoCircle />,
      cName: "nav-text"
    },
    {
      title: "Contact Us",
      path: "/contact",
      linkIndex: 11,
      icon: <FiIcons.FiPhoneCall />,
      cName: "nav-text"
    }
  ];
  