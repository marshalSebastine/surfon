import './CourseCard.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentProduct } from '../../store/reducers/cartState/cartstate.reducer'



let CourseCard = ({ course, goto, onhovertext,imgname, categorycard=false }) => {

    const dispatch = useDispatch()
    const navigation = useNavigate()
    let title = course ? course.title : ''
    const handleCourseCardClick = (course,goto) => (_event) => {
        if(!categorycard){
            dispatch(setCurrentProduct(course))
        }
        navigation(goto)
    }

    return (
        <div className='coursecard'>
            <div className='courselink' onClick={handleCourseCardClick(course,goto)} >
                <img src={process.env.PUBLIC_URL + '/' + imgname + '.jpeg'} alt='bookclasstype' className='bookbytitleimage' />
                <div className='bookbytext'>
                    <h3><i>{onhovertext}</i></h3>
                </div>
            </div>
            { (title !== '') && <h3 className='coursecardtitle'>{course.title}</h3>}
            {(course && course.endPrice) && <p className='coursecardprice'>{`${course.startPrice} - ${course.endPrice}`}</p>}
            {(course && !(course.endPrice) && course.startPrice) && <p className='coursecardprice'>{`${course.startPrice}`}</p>}
            
        </div>
    )
}

export default CourseCard