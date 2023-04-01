import './hamburger-menu.styles.css';

const HamburgerMenu = ({menuButtonClick,buttonState}) => {
    // const [isClicked,setClicked] = useState(false);
    // const transformToCross = () => {
    //     setClicked(!isClicked)
    // }
    const handleMenuClick = () => {
        menuButtonClick((state) =>  {
            return(!state)
        })
    }
    return(
    <div role={"button"} tabIndex={0}  onKeyDown={handleMenuClick} onClick = {handleMenuClick} className='hamburger-shell'>
        <div className={`hamburger-top ${buttonState ? 'rotate ': ''}`}></div>
        <div className={`hamburger-middle ${buttonState ? 'become-circle': ''}`}></div>
        <div className={`hamburger-bottom ${buttonState ? 'rotate-back': ''}`}></div>
    </div>)
}

export default HamburgerMenu