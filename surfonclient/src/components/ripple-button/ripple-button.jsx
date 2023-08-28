import { CreateRipple } from '../../utils/styleutils';
import './ripple-button.css';
import * as AiIcons from 'react-icons/ai'
import * as VscIcons from 'react-icons/vsc'
import * as BsIcons from 'react-icons/bs'



const MaterialButton = ({ buttoncontent, buttonAction, buttonStyle, disabled,loading=false,error=false,success=false}) => {

    return (
        <button disabled={disabled} style={buttonStyle}
            onClick={(event) => {
                CreateRipple(event)
                if(buttonAction){
                    buttonAction(event)
                }
            }}
            className={(disabled || loading) ?'ripple-button disabled-button' : 'ripple-button'}>
            <div className='buttoncontentwrapper'>
                <p>{buttoncontent}</p>
                {loading &&  <AiIcons.AiOutlineLoading className='loadingicon'/>}
                {error && <VscIcons.VscError/>}
                {success && <BsIcons.BsCheck2Circle/>}
            </div>
        </button>
    )
}

export default MaterialButton