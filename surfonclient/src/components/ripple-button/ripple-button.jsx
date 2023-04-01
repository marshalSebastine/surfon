import { CreateRipple } from '../../utils/styleutils';
import './ripple-button.css';

const MaterialButton = ({buttoncontent,buttonAction,buttonStyle}) => {
    return(
        <button style={buttonStyle}onClick={(event) => {
            CreateRipple(event)
            buttonAction()
            }} className='ripple-button'>
            <p>{buttoncontent}</p>
        </button>
    )
}

export default MaterialButton