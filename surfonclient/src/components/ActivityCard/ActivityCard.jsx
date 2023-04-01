import './ActivityCard.css';
import MaterialButton from '../ripple-button/ripple-button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectWindowWidth } from '../../store/reducers/windowproperties/windowproperties.selector';

const ActivityCard = ({header,activityinfotxt,buttonlink,buttontext,cardimage}) => {
    let cardstyle = {borderBottom: '1.4px solid black'}
    let activityinfostyle
    let widthed = useSelector(selectWindowWidth);
    if (widthed < 700){
        activityinfostyle = {}
    }else{
        activityinfostyle = {maxWidth: '50%'}
    }
    if(!buttonlink){
        cardstyle.flexDirection = 'row-reverse'
    }

    return(
    <div style={cardstyle} className='activitycard-container'>
        <img className='cardimage' src={cardimage} alt={header}/>
        <div style = {activityinfostyle} className='activityinfo'>
            <h2>
                {header}
            </h2>
            <p>
            {activityinfotxt}
            </p>
            {
                buttontext &&
                <Link to={buttonlink} style ={{textDecoration: 'none'}}>
                    <MaterialButton buttoncontent={buttontext}/>
                </Link>
            }
        </div>
    </div>
    )
}
export default ActivityCard