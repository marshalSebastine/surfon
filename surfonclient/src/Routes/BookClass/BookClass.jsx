import { useEffect, useState } from 'react';
import './BookClass.css';
import Lottie from "lottie-react";
import resourcenotfoundanimation from '../../assets/resourcenotfound.json';
import { setAllProducts } from '../../store/reducers/cartState/cartstate.reducer';
import { selectAllProducts } from '../../store/reducers/cartState/cartstate.selector';
import CourseCard from '../../components/CourseCard/CourseCard.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { useSelector, useDispatch } from 'react-redux';

let NoResource = () => {
    return(
        <Lottie animationData={resourcenotfoundanimation} loop={true}>

        </Lottie>
    )
}

let BookClass = () => {

    const dispatch = useDispatch();
    const courses = useSelector(selectAllProducts);
    const [search, setSearch] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(courses);



    useEffect(() => {
        const courseFetchUri = process.env.NODE_ENV === 'development' ? `http://localhost:4001/allcourses` : 'https://surfon.onrender.com/allcourses'
        fetch(courseFetchUri).then((response) => {
            if (response.status !== 200) {
                console.error('courses fetching error', response.status)
                return
            }
            response.json().then((res) => {
                res.sort(((coursea, courseb) => {
                    if (coursea.startPrice < courseb.startPrice) return -1
                    else { return 1 }
                }))
                dispatch(setAllProducts(res))
            })

        })
    }, [])

    useEffect(() => {
        if (search === '') {
            setFilteredCourses(courses)
            return
        }
        let filteredCourses = courses.filter((course, _index) => {
            return course.title.toLowerCase().includes(search.toLowerCase())
        })
        setFilteredCourses(filteredCourses)
    }, [search, courses])

    const handleSortChange = (evnt) => {

        switch (evnt.target.value) {
            case 'popularity':
                filteredCourses.sort((a, b) => {
                    if (a.popularity > b.popularity) return -1
                    else { return 1 }
                })
                break;
            case 'lowhigh':
                filteredCourses.sort(((coursea, courseb) => {
                    if (coursea.startPrice < courseb.startPrice) return -1
                    else { return 1 }
                }))
                break;
            case 'highlow':
                filteredCourses.sort(((coursea, courseb) => {
                    if (coursea.startPrice > courseb.startPrice) return -1
                    else { return 1 }
                }))
                break;
            default:
                break;

        }
        const newRefFilteredArray = [...filteredCourses]
        setFilteredCourses(newRefFilteredArray)
    }


    return (
        <div>
            <div className='book-header-container'>
                <i>BOOKINGS</i>
            </div>
            <h3 className='bookbytitle' >BY SPORT</h3>
            <div className='bookbytitlecontainer'>
                <CourseCard onhovertext={'KAYAKING'}
                    categorycard={true}
                    goto={'/kayakingclasses'}
                    imgname={'kayakingcat'} />
                <CourseCard onhovertext={'STAND UP PADDLING'} 
                    categorycard={true}
                    goto={'/standuppaddlingclasses'}
                    imgname={'standuppaddlingcat'} />
                <CourseCard onhovertext={'OCEAN SWIMMING'}
                    categorycard={true}
                    goto={'/oceanswimmingclasses'}
                    imgname={'oceanswimmingcat'} />
                <CourseCard onhovertext={'SURFING'}
                    categorycard={true}
                    goto={'/surfingclasses'}
                    imgname={'surfingcat'} />

            </div>
            <h3 className='bookbytitle' >BY PLANS</h3>
            <div className='searchnsort'>
                <SearchBar setTextFieldValue={setSearch} textFieldValue={search} />
                <div className='sortcontainer'>
                    <label htmlFor='sortcourses' className='sortlabel'> Sort By </label>
                    <select defaultValue={'lowhigh'} onChange={handleSortChange} name="Sort" className='sortc' id="sortcourses">
                        <option value="popularity">Popularity</option>
                        <option value="highlow">Price High to Low</option>
                        <option value="lowhigh">Price Low to High</option>
                    </select>
                </div>
            </div>
            <div className='bookbytitlecontainer'>
                {(filteredCourses.length === 0) && <NoResource/>}
                {filteredCourses.map((course, index) => {
                    return (<CourseCard onhovertext={'Book Class'} course={course} imgname={course.imgName}
                                         goto={`/bookclass/addproduct`}  key={index} />)
                })}
            </div>
        </div>
    )
}

export default BookClass