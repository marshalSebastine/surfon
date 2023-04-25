import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './BookClass.css';
import CourseCard from '../../components/CourseCard/CourseCard.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';
import { useDispatch } from 'react-redux';
import { selectCartCurrentProduct } from '../../store/reducers/cartState/cartstate.selector';


let BookClass = () => {

    const [courses, setCourses] = useState([])
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
                setCourses(res)
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
                {(filteredCourses.length === 0) && <h3 style={{ fontSize: 'x-large' }}>No results found</h3>}
                {filteredCourses.map((course, index) => {
                    return (<CourseCard onhovertext={'Book Class'} course={course} imgname={course.imgName}
                                         goto={`/bookclass/checkoutproduct`}  key={index} />)
                })}
            </div>
        </div>
    )
}

export default BookClass