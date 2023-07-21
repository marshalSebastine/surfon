import './OceanSwimming.styles.css';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentProduct } from '../../store/reducers/cartState/cartstate.reducer';
import { selectAllProducts, selectCourseByTitle } from '../../store/reducers/cartState/cartstate.selector';


const OceanSwimming = () => {

    const dispatch = useDispatch()
    const oceanswimref = useRef()
    const swimcoursetitle = 'Ocean Swimming Course'
    let allProducts = useRef(useSelector(selectAllProducts))
    const selectCourseByTitle = (title) => {
        for (let course of allProducts.current) {
            if (course.title === title) return course
        }
    }
    let oceancourse = useRef()
    let onRegisterClick = (_evnt) => { 
        if(!oceancourse.current){
            //show 404 page we can make later
            return
        }
        dispatch(setCurrentProduct(oceancourse.current))
     }
    useEffect(() => {
        const content = {
            0: {
                'title': 'OCEAN LITERACY & SAFETY',
                'content': `Knowledge dispels fear. Ocean is probably the most misunderstood water body on earth and most often taken lightly. This course will dispel your fear and teach you how to understand and read the ocean like a book.`
            },
            1: {
                'title': 'FREE FLOAT & TREAD',
                'content': `Why swim when you can float? The techniques you learn will let you stay out in the ocean for hours, without getting tired or exhausted. Master and use buoyancy, wave action and currents to your advantage. Rule the elements.`
            },
            2: {
                'title': 'WE KNOW OUR SPORT',
                'content': `Learn with the pioneers of ocean board sports and ocean literacy in India, Bay of Life is Chennai's first surf school. First accredited in India, fully certified crew from NOLS (USA), WMI (USA) , SFI (IND) , NIWS ( Goa). With more than 6 years experience in the ocean Bay of Life has trained over 5000 men and women, including 8 year olds. Get on board.`
            }
        }
        oceancourse.current = selectCourseByTitle(swimcoursetitle)
        let container = oceanswimref.current
        if (container) {
            let indx = 0
            for (let flexitem of container.children) {
                while (flexitem.firstChild) {
                    flexitem.removeChild(flexitem.firstChild)
                }
                const title = document.createElement('div')
                title.classList.add('oceanswimgflexchildtitle')
                let titlecontent = content[indx].title
                titlecontent.split(' ').forEach((word, indx) => {
                    let span = document.createElement('span')
                    span.textContent = `${word}`
                    span.style.animationDelay = `${indx / 3}s`
                    title.appendChild(span)
                })
                flexitem.appendChild(title)
                const description = document.createElement("div")
                description.classList.add("oceanswimgflexchildcontent")
                let desccontent = content[indx].content
                desccontent.split(' ').forEach((word, indx) => {
                    let span = document.createElement('span')
                    span.textContent = `${word}`
                    span.style.animationDelay = `${indx / 3}s`
                    description.appendChild(span)
                })
                flexitem.appendChild(description)
                indx += 1
            }
        }
    }, [])

    return (
        <div className='oceanswimprewrap'>
            <div className='oceanswimmingbg'>
                <div className='filtercover'>
                    <div className='oceanswimtitlecontainer'>
                        <h3 className='oceanswimmingtitle'><span style={{ color: 'powderblue' }} className='oceanswimmingtitle'>Conquer</span> the Ocean. Conquer the <span style={{ color: 'powderblue' }} className='oceanswimmingtitle'>Fear.</span></h3>
                        <Link className='register'
                            onClick={onRegisterClick}
                            to={'/bookclass/addproduct'}>
                            <h3>Register</h3>
                        </Link>
                    </div>
                    <div ref={oceanswimref} className='oceanswimwrapper responsive'>
                        <div className='oceanswimgflexchild responsive'>

                        </div>
                        <div className='oceanswimgflexchild responsive'>

                        </div>
                        <div className='oceanswimgflexchild responsive'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='whatulearnparentwrapper'>
                <h3 className='oceanswimwhatulearntitle'>What you will Learn?</h3>
                <div className='learncardswrapper'>
                    <div className='oceanswimlearncard'>
                        <h3>Learn about currents</h3>
                        <p>Ever wanted to read the ocean like a book, understand and identify currents and use them to your advantage? Learn to enter a rip and get out safely. Become a ocean reader!</p>
                    </div>
                    <div className='oceanswimlearncard'>
                        <h3>The science of waves and tides</h3>
                        <p>Waves can tell a lot about the ocean's condition. Waves are great indicators of depth and even the weather! Familiarize yourself with wave formations and wave action for a well rounded ocean learning.</p>
                    </div>
                    <div className='oceanswimlearncard'>
                        <h3>Flotation for rest, recovery and survival.</h3>
                        <p>Why swim when you can float? You will learn various flotation and treading techniques that will make your swimming in the ocean easy and enjoyable. With almost no energy spent you will be out in the ocean for hours. Freedom from a life vest.</p>
                    </div>
                    <div className='oceanswimlearncard'>
                        <h3>Basic rescue training</h3>
                        <p>Ever wanted to save people in the water? Now you will be able to with the world's most effective techniques in water based rescue.</p>
                    </div>
                    <div className='oceanswimlearncard'>
                        <h3>Open water Swimming</h3>
                        <p> Learn to swim like a pro in open waters, conserve energy, learn speed and endurance, current resistance. Leearn to rest in deep water and contnue your swim. Learn self rescue.</p>
                    </div>
                    <div className='oceanswimlearncard'>
                        <h3>Special warm ups and cool offs for ocean based sports</h3>
                        <p>With Chennai's best fitness expert on the advisory board, specialized warm ups and cool offs keep spasm and sprains away.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default OceanSwimming