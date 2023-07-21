import { useEffect, useRef, useState } from 'react';
import './FaqBox.styles.css';
import * as MdIcons from "react-icons/md";


const FaqBox = ({questiontext,answertext}) => {
    const answer = useRef();
    const [open,setOpen] = useState(false);

    function expandQuestionBox(_evnt) {
        setOpen(!open);
    }
    return( 
        <div onClick={expandQuestionBox} className='faqbox'>
            <span className={ !open ? 'question' : 'question goup'}>{questiontext}</span>
            <MdIcons.MdOutlineArrowDropDown className={open ? 'questionexpandicon' : 'questionexpandicon expanded'} />
            <div ref={answer} style={open ? {height: `${answer.current.scrollHeight}px`}:{}} className='answerbox'>
                <p className={!open ? 'answer' : 'answer appear'}>
                   {answertext}
                </p>
            </div>

        </div>
    )
}

export default FaqBox