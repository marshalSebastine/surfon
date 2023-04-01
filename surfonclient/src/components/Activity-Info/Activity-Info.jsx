import { Link } from 'react-router-dom';
import MaterialButton from '../ripple-button/ripple-button';
import './Activity-Info.css';

const ActivityInfo = ({header,activityinfotxt,buttontext,buttonlink,faqbttn}) => {
    let buttonstack
    if (faqbttn){
        buttonstack = <div className='button-container'>
                            <Link to={buttonlink} style ={{textDecoration: 'none'}}>
                                <MaterialButton buttoncontent={buttontext}/>
                            </Link>
                            <Link to={'/faq'} style = {{textDecoration: 'none'}}>
                                <MaterialButton buttoncontent={"FAQ"}/>
                            </Link>
                      </div>
    }else{
        buttonstack = <div className='button-container'>
                            <Link to={buttonlink} style ={{textDecoration: 'none'}}>
                                <MaterialButton buttoncontent={buttontext}/>
                            </Link>
                     </div>
    }
    return(
        <div className='activityinfo'>
            <h2>
                {header}
            </h2>
            <p>
            {activityinfotxt}
            </p>
            {buttonstack}
        </div>
    )
}

export default ActivityInfo