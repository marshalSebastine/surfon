import './ReviewCard.css';
import * as FcIcons from "react-icons/fc";
import * as AiIcons from "react-icons/ai";
import { randomNumber,useIsOverflow } from '../../utils/styleutils';
import { useState, useRef, useEffect } from 'react';

const ReviewCard = ({name,date,rating,desc}) => {
    const colorTray  = ['#7DB9B6','#F5E9CF','#E96479','#4D455D']
    const [textAction, setTextAction] = useState('Read More')
    const iconstyle = {
        fontSize: '34px'
    }
    const starstyle = {
        fontSize: '28px',
        color: 'gold'
    }
    let contentHeight = useRef(0)
    let rand = useRef(randomNumber(0,3));
    const ref = useRef();
    const cardRef = useRef();
    const descRef = useRef();
    let isOverflow = useIsOverflow(descRef)
    console.log(isOverflow)
    let rateDescStyle = {
        height: '75px'
    }
    let descPStyle = {
        display: '-webkit-box',
        WebkitLineClamp: '3',
        WebkitBoxOrient: 'vertical',
    }
    useEffect(() => {
        if(descRef.current){
            contentHeight.current = descRef.current.scrollHeight
        }
    }, [])
    let hideShowText = (_evnt) => {
        if(textAction === 'Read More'){
            descRef.current.style.height = `${contentHeight.current}px`
            cardRef.current.style.height = 'initial'
            ref.current.style.WebkitBoxOrient = ''
            ref.current.style.display = ''
            ref.current.style.WebkitLineClamp = ''
            setTextAction('hide')
        }else{
            console.log('reached')
            descRef.current.style.height = '75px'
            cardRef.current.style.height = '290px'
            ref.current.style.WebkitBoxOrient = 'vertical'
            ref.current.style.display = '-webkit-box'
            ref.current.style.WebkitLineClamp = '3'
            setTextAction('Read More')
        }
        
    }
    return(
        <div ref = {cardRef} className='reviewcard'>
            <div className='card-header'>
                <div className='reviewer-dp' style={{backgroundColor: `${colorTray[rand.current]}`}}>
                    <p style={{color: 'white'}}>{name[0]}</p>
                </div>
                <div className='name-n-date'>
                    <p className='reviewer-name'>{name}</p>
                    <p className='review-date'>{date}</p>
                </div>
                <FcIcons.FcGoogle style={iconstyle} />
            </div>
            <div className='rating'>
                {[...Array(rating)].map((_item,indx) => {
                    return(
                        <AiIcons.AiFillStar key={indx} style={starstyle}/>
                    )
                })}
            </div>
            <div ref={descRef} style={rateDescStyle} className='rating-desc'>
                <p ref={ref} style={descPStyle}>
                    {desc}
                </p>
            </div>
            { isOverflow && <p style = {{textDecoration: 'underline', cursor: 'pointer'}}
                                onClick={hideShowText}>{textAction}</p>}
        </div>
    )
}

export default ReviewCard