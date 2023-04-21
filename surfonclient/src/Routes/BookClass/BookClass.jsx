import { useEffect, useState } from 'react';
import './BookClass.css';
import CourseCard from '../../components/CourseCard/CourseCard.jsx';
import SearchBar from '../../components/SearchBar/SearchBar.jsx';


let BookClass = () => {

    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState('');
    const [filteredCourses, setFilteredCourses] = useState(courses);

    useEffect(() => {
        fetch('https://surfon.onrender.com/allcourses').then((response) => {
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
        console.log('here')
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
                console.log('here also')
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
                    goto={'/kayakingclasses'}
                    imgname={'kayakingcat.jpeg'} />
                <CourseCard onhovertext={'STAND UP PADDLING'}
                    goto={'/standuppaddlingclasses'}
                    imgname={'standuppaddlingcat.jpeg'} />
                <CourseCard onhovertext={'OCEAN SWIMMING'}
                    goto={'/oceanswimmingclasses'}
                    imgname={'oceanswimmingcat.jpeg'} />
                <CourseCard onhovertext={'SURFING'}
                    goto={'/surfingclasses'}
                    imgname={'surfingcat.jpeg'} />

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
                    return (<CourseCard onhovertext={'Book Class'} goto={'/da'} imgname={`${course.imgName}.jpeg`} key={index} title={course.title}
                        startPrice={course.startPrice} endPrice={course.endPrice} />)
                })}
            </div>

        </div>
    )
}

export default BookClass