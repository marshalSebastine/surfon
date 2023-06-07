import './review-corousel.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectWindowWidth } from '../../store/reducers/windowproperties/windowproperties.selector';

const ReviewCorousel = () => {
    const corouselRef = useRef()
    let widthed = useSelector(selectWindowWidth);
    // const reviewCardRef = useRef()
    function scrollRightClicked(_event){

        if(corouselRef.current){
            let corousel = corouselRef.current
            let scrollTo = corousel.scrollLeft+corousel.firstElementChild.offsetWidth
            corousel.scroll({
                left: scrollTo,
                behavior: 'smooth'
            })
        }
        

    }
    function scrollLeftClicked(_event){
        let corousel = corouselRef.current
        let scrollTo = corousel.scrollLeft+corousel.firstElementChild.offsetWidth
        if(corouselRef.current){
            corousel.scroll({
                left: -scrollTo,
                behavior: 'smooth'
            })
        }
    }

    return(
        <div className='rev-corousel'>
            {(widthed > 500) && <button onClick={scrollLeftClicked}
                                        style={{fontSize: '32px'}}
                                        className="rev-carousel-btn rev-carousel-btn-prev">&#10094;
                                </button>}
            <div ref={corouselRef} className='rev-corousel-wrapper'>
                <ReviewCard name={'marteio jkhefbkjahfg adgfcvghavajtfy'}
                    date={'2023-02-18'}
                    rating={5}
                    desc={`Right from the time of contacting the organisation, making the booking and meeting
                         the trainer,it was as smooth and easy as it gets. Went for
                         ocean swimming after a long time and the trainer-kavi mani, was too good 
                         in explaining the theoretical aspects of the ocean(the waves, current, tides, winds etc) and 
                         the technique for ocean swimming. Went like 200-400mtr into the sea and it was an amazing experience.`} />
                <ReviewCard name={'marteio jkhefbkjahfg adgfcvghavajtfy'}
                    date={'2023-02-18'}
                    rating={5}
                    desc={`Right from the time of contacting the organisation, making the booking and meeting
                         the trainer,it was as smooth and easy as it gets. Went for
                         ocean swimming after a long time and the trainer-kavi mani, was too good 
                         in explaining the theoretical aspects of the ocean(the waves, current, tides, winds etc) and 
                         the technique for ocean swimming. Went like 200-400mtr into the sea and it was an amazing experience.`} />
                <ReviewCard name={'marteio jkhefbkjahfg adgfcvghavajtfy'}
                    date={'2023-02-18'}
                    rating={5}
                    desc={`Right from the time of contacting the organisation, making the booking and meeting
                         the trainer,it was as smooth and easy as it gets. Went for
                         ocean swimming after a long time and the trainer-kavi mani, was too good 
                         in explaining the theoretical aspects of the ocean(the waves, current, tides, winds etc) and 
                         the technique for ocean swimming. Went like 200-400mtr into the sea and it was an amazing experience.`} />
                <ReviewCard name={'marteio jkhefbkjahfg adgfcvghavajtfy'}
                    date={'2023-02-18'}
                    rating={5}
                    desc={`Right from the time of contacting the organisation, making the booking and meeting
                         the trainer,it was as smooth and easy as it gets. Went for
                         ocean swimming after a long time and the trainer-kavi mani, was too good 
                         in explaining the theoretical aspects of the ocean(the waves, current, tides, winds etc) and 
                         the technique for ocean swimming. Went like 200-400mtr into the sea and it was an amazing experience.`} />
                <ReviewCard name={'marteio jkhefbkjahfg adgfcvghavajtfy'}
                    date={'2023-02-18'}
                    rating={5}
                    desc={`Right from the time of contacting the organisation, making the booking and meeting
                         the trainer,it was as smooth and easy as it gets. Went for
                         ocean swimming after a long time and the trainer-kavi mani, was too good 
                         in explaining the theoretical aspects of the ocean(the waves, current, tides, winds etc) and 
                         the technique for ocean swimming. Went like 200-400mtr into the sea and it was an amazing experience.`} />
                <ReviewCard name={'marteio jkhefbkjahfg adgfcvghavajtfy'}
                    date={'2023-02-18'}
                    rating={5}
                    desc={`Right from the time of contacting the organisation, making the booking and meeting
                         the trainer,it was as smooth and easy as it gets. Went for
                         ocean swimming after a long time and the trainer-kavi mani, was too good 
                         in explaining the theoretical aspects of the ocean(the waves, current, tides, winds etc) and 
                         the technique for ocean swimming. Went like 200-400mtr into the sea and it was an amazing experience.`} />
                <ReviewCard name={'marteio jkhefbkjahfg adgfcvghavajtfy'}
                    date={'2023-02-18'}
                    rating={5}
                    desc={`Right from the time of contacting the organisation, making the booking and meeting
                         the trainer,it was as smooth and easy as it gets. Went for
                         ocean swimming after a long time and the trainer-kavi mani, was too good 
                         in explaining the theoretical aspects of the ocean(the waves, current, tides, winds etc) and 
                         the technique for ocean swimming. Went like 200-400mtr into the sea and it was an amazing experience.`} />
            </div>
            {(widthed > 500) && <button onClick={scrollRightClicked}
                                        style={{fontSize: '32px'}}
                                        className="rev-carousel-btn rev-carousel-btn-next">&#10095;
                                </button>}
        </div>
    )
}

export default ReviewCorousel   