import './CourseCard.css'

let CourseCard = ({ goto, onhovertext, imgname,title,startPrice,endPrice }) => {
    return (
        <div className='coursecard'>
            <a className='courselink' href={goto} >
                <img src={process.env.PUBLIC_URL + '/' + imgname} alt='bookclasstype' className='bookbytitleimage' />
                <div className='bookbytext'>
                    <h3><i>{onhovertext}</i></h3>
                </div>
            </a>
            { (title) && <h3 className='coursecardtitle'>{title}</h3>}
            {(endPrice) && <p className='coursecardprice'>{`${startPrice} - ${endPrice}`}</p>}
            {(!(endPrice) && startPrice) && <p className='coursecardprice'>{`${startPrice}`}</p>}
            
        </div>
    )
}

export default CourseCard