import TextField from '../TextField/TextField';
import MaterialButton from '../ripple-button/ripple-button';
import './contactUs.css';

const ContactUs = () => {
    return(
        <div className='constactuscontainer'>
            <form  autoComplete={true} className='contactusform'>
                <h2>Speak to us</h2>
                <p>Call us : 99404 16396 / 9940488880</p>
                <p>Email: Contact@bayoflife.com</p>
                <p>Location: 300 mts before Taj Vivanta, Kovalam, ECR, Chennai</p>

                <h3>{`Sign up for our occasional newsletter.
                 Hear from us on ocean workshops and camps. No boring stuff, promise. `}</h3>
                <TextField name={'name'} id={'name'} 
                           type={'input'} label={'Name'} required={false} />
                <TextField name={'email'} id={'email'}
                           type={'email'} label={'Email*'} required={true} />
                <MaterialButton buttonStyle={{marginTop: '60px'}} buttoncontent={'Submit'}/>
            </form>
            {/* <div className='contactusmap'>
            </div> */}
        </div>
    )
}

export default ContactUs