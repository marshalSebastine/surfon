import './Footer.css';
import * as AiIcons from 'react-icons/ai';
let Footer = () => {
    return(
        <div className='footer-wrapper'>
            <p className='footer-header'>© 2023 Bay of Life Chennai's First Surf School Since 2011</p>
            <a className='totop' href='#top'>To the Top &#8593;</a>
            <div className='whatsapp'>
                <p className='whatsapp-text'>We're Live! on Whatsapp</p>
                <AiIcons.AiOutlineWhatsApp className='whatsapp-icon'/>
            </div>
        </div>
    )
}

export default Footer