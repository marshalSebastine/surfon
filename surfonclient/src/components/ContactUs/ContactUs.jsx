import { useState } from 'react';
import TextField from '../TextField/TextField';
import MaterialButton from '../ripple-button/ripple-button';
import './contactUs.css';

const ContactUs = () => {
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError]  = useState(false)
    const [success,setSuccess]  = useState(false)

    function handleFormSubmit(evnt)  {
        evnt.preventDefault()
        setIsLoading(true)
        setSuccess(false)
        setError(false)
        let formData = {}
        let name = evnt.target.name.value
        let email = evnt.target.email.value
        if(name){
            formData['name'] = name
        }
        formData['email'] = email
        const postFormDataUrl = process.env.NODE_ENV === 'development' ? `http://localhost:4001/userdata/submit` : 'https://surfon.onrender.com/userdata/submit'
        // just to see the loading stuff :)
        setTimeout(() => {
            fetch(postFormDataUrl,{method: "POST",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(formData)})
                    .then((res) => {
                        setIsLoading(false)
                        setError(false)
                        setSuccess(true)
                        console.log('the response is ',res)})
                    .catch((er) => {
                        setIsLoading(false)
                        setSuccess(false)
                        setError(true)
                        console.log(er)
                    })

        },2000)

        }



    return(
        <div className='constactuscontainer'>
            <form  onSubmit={handleFormSubmit} name='emailandname' className='contactusform'>
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
                <MaterialButton buttonStyle={{marginTop: '60px'}}
                                error={error} success={success} loading={isLoading} 
                                buttoncontent={'Submit'}/>
            </form>
        </div>
    )
}

export default ContactUs