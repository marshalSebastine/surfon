import './Contact.styles.css'

const ContactPage = () => {
    return (
        <div className='contactpagewrappper'>
            <div className='contactcardwrapper'>
                    <h1>Contact</h1>
                    <p>Get in touch.</p>
                    <div className='contactaddresscontainer'>
                        <div className='contactinfocolumn'>
                            <h3>Contact Info</h3>
                            <hr></hr>
                            <p style={{color: 'black'}}>Phone:</p>
                            <p>Bookings and enquiries call +91 999** 1**6</p>
                            <p>Whatsapp 99404 *8*81*</p>
                            <p style={{color: 'black'}}>Email:</p>
                            <p>Contact*hg@gmail.com</p>
                            <p>redfreinbh*hg@gmail.com</p>
                        </div>
                        <div className='contactaddresscolumn'>
                            <h3>Our Address</h3>
                            <hr></hr>
                            <p>Wave of Life</p>
                            <p>10/10 blackcup street</p>
                            <p>Konkoleyard</p>
                            <p>Chennai 1211121</p>
                            <p> 300 m from Harry's den</p>
                        </div>
                        <div className='contacttimecolumn'>
                            <h3>Hours</h3>
                            <hr></hr>
                            <p>Tuesday - Sunday: 7 am to 7 pm</p>
                            <p>Monday holiday</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default ContactPage