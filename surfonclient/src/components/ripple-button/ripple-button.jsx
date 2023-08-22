import { CreateRipple } from '../../utils/styleutils';
import './ripple-button.css';

const MaterialButton = ({ buttoncontent, buttonAction, buttonStyle, disabled }) => {
    return (
        <button disabled={disabled} style={buttonStyle}
            onClick={(event) => {
                CreateRipple(event)
                if(buttonAction){
                    buttonAction(event)
                }
            }}
            className={disabled ?'ripple-button disabled-button' : 'ripple-button'}>
            <p>{buttoncontent}</p>
        </button>
    )
}

export default MaterialButton