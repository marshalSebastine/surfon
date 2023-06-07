import React, { useRef,useState, MutableRefObject, useEffect, Children } from 'react';
import { selectCorouselSlide,selectCorouselTotalSlide } from '../../store/reducers/corouselState/corouselstate.selector';
import { useSelector, useDispatch } from 'react-redux';
import './corousel.styles.css';
import { decrementSlide, incrementSlide, setCorouselSlide,setTotalSlides } from '../../store/reducers/corouselState/corouselstate.reducer';

type PropsPassed = {
    children: JSX.Element[]
}


let Corousel: React.FC<PropsPassed> = ({children}) => {

    const corousel = useRef<HTMLOListElement | null>(null) as MutableRefObject<HTMLOListElement>;
    const moveStart = useRef(0);
    // const totalSlides = useRef(0);
    const moveTo = useRef(0);
    const moving = useRef(false)
    const moveFast = useRef(false)
    // const byPass = useRef(false);
    const dispatch = useDispatch()
    const firstChild = children[0]
    const lastChild = children[children.length-1]
    let currentSlide = useSelector(selectCorouselSlide)
    let totalSlides = useSelector(selectCorouselTotalSlide)
    const [corStyle,setCorStyle] = useState<React.CSSProperties>({
        transition: 'ease-out 0.5s',
        transform: `translate3d(0,0,0)`,
    })

    const changeItem = (index: number) => (event: React.MouseEvent) => {
        dispatch(setCorouselSlide(index))
    }

    const rightButtonClicked = () => {

        // dispatch(setCorouselSlide(currentSlide+1))
        dispatch(incrementSlide())
        // setCurrentSlide((slide) => {
        //     return slide+1
        // })

    }
    const leftButtonClicked = () => {
        dispatch(decrementSlide())
    }

    function getPosition(event: React.TouchEvent<HTMLOListElement>) {
        const { pageX } = event.touches[0];
        let value = (pageX/corousel.current.clientWidth)*100;

        return value;
    }
    function onTransitionEnd(evnt: React.TransitionEvent<HTMLOListElement>){
    
        switch(currentSlide){
            case(0):
                setSlideAnimation('none',-100*(totalSlides-2))
                // byPass.current = true
                dispatch(setCorouselSlide(totalSlides-2))
                // setCurrentSlide(totalSlides.current-2)
                break
            case(totalSlides-1):
                setSlideAnimation('none',-100)
                // byPass.current = true
                dispatch(setCorouselSlide(1))
                break
            default:
                break
        }

        moving.current = false

    }
    function setSlideAnimation(transition: string = 'none',xaxis:number = -100){
        let animate = moveFast.current ? 'none' : transition
        setCorStyle({
          transition: `${animate}`,
          transform: `translate3d(${xaxis}%,0,0)`,
        })
        if(moveFast.current){
            setTimeout(() => {moving.current = false},300)
        }
    }
    const handleTouchMove = (evnt: React.TouchEvent<HTMLOListElement>) => {
        if(moving.current){return}
   
        moveTo.current = currentSlide*-100 - moveStart.current + getPosition(evnt)
        setSlideAnimation(undefined,moveTo.current)

    }
    const handleTouchEnd = (evnt: React.TouchEvent<HTMLOListElement>) => {
        
        if(moveTo.current === 0){return}

        if((moveTo.current+currentSlide*100) <= -40){
            dispatch(incrementSlide())

        }else if ((moveTo.current + (currentSlide-1)*100) >= -60){
            dispatch(decrementSlide())
        }else{
            setSlideAnimation('ease-out 0.5s',-100*currentSlide)
        }
        moveTo.current = 0
    }
    function handleSwipeStart(event: React.TouchEvent<HTMLOListElement>) {

        moveStart.current = getPosition(event)
    
      }

    useEffect(() => {
        // if(byPass.current){
        //     byPass.current = false
        //     return
        // }
        moving.current = true
        setSlideAnimation('ease-out 0.5s',-100*currentSlide)
        if(currentSlide === totalSlides-1 || currentSlide === 0){
            moveFast.current = true
            
        }else{
            moveFast.current = false
        }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[currentSlide])
    
    useEffect(() => {
        // totalSlides.current = corousel.current.childElementCount
        dispatch(setTotalSlides(corousel.current.childElementCount))
        setSlideAnimation('none',-100*currentSlide)
        moving.current = false
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
    <div className='corousel-wrapper'>
        <button onClick={leftButtonClicked} className='left-arrow'>&#10094;</button>
        <ol ref={corousel} className='corousel'
                           onTouchMove = {handleTouchMove}
                           onTouchEnd = {handleTouchEnd}
                           onTouchStart = {handleSwipeStart}
                           onTransitionEnd = {onTransitionEnd}
                           style={corStyle}>
            <li key={0} className='slide'>
                {lastChild}
            </li>
            {
            Children.map(children, (child: React.ReactNode, index: number) => {
                return(
                <li key={index+1} className='slide'>
                    {child}
                </li>)
            })
            }
            <li key={children.length+1} className='slide'>
                {firstChild}
            </li>
        </ol>
        <button onClick={rightButtonClicked} className='right-arrow'>&#10095;</button>
        <ol className='control-dots' style={{textAlign:"center"}}>
            {
                Children.map(children, (_,index) => {

                    return(
                        <li onClick={changeItem(index+1)} value={index+1} 
                                                        key={index+1} 
                                                        className={`dots ${currentSlide === index+1 ? 'selected-dot' : ''}`}>
                        </li>
                    )
                })
            }
        </ol>
    </div>
)
}
export default Corousel