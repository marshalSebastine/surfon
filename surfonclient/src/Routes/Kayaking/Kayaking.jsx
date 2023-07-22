import { useRef, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setCurrentProduct } from '../../store/reducers/cartState/cartstate.reducer';
import { Link } from 'react-router-dom';
import './kayaking.styles.css';
import { selectAllProducts } from '../../store/reducers/cartState/cartstate.selector';
import MaterialButton from '../../components/ripple-button/ripple-button';
import * as AiIcons from "react-icons/ai";
import FaqBox from '../../components/FaqBox/FaqBox';
const Kayaking = () => {

    let kayakingInfoContainer = useRef();
    const dispatch = useDispatch();
    let kayakinglessons = useSelector(selectAllProducts).filter((course, _indx) => {
        return course.category === 'kayaking'
    });


    useEffect(() => {
        const content = {
            'title': 'Kayaking In Chennai',
            'subtitle': 'Location: Kovalam- Muttukadu, Chennai',
            'description': `Learn from the introducers of Kayaking in Chennai. Now Kayaking is closer to home than ever, situated in Kovalam on ECR. Bay of Life offers discover kayaking in backwaters, ocean and pro Kayaking courses. Kayaking in Chennai was never this approachable before. Looking for unique fun family activities? Visit Bay of Life. Get your much deserved dose of weekend adventure with your family at the beach. Bay of Life beach activities are safe for kids and adults alike. With our two seater and single seater kayaks you can take your family for a safe and joyful ride in the backwater or in our shetlered cove by the shore. There are always some fun beach actvities that will engage your family at Bay of Life`
        }
        let container = kayakingInfoContainer.current
        if (container) {
            while (container.firstChild) {
                container.removeChild(container.firstChild)
            }
            const title = document.createElement('div')
            title.classList.add("kayakingcontenttitle")
            let titlecontent = content.title
            let total = 0
            titlecontent.split(' ').forEach((word, indx) => {
                let span = document.createElement('span')
                span.textContent = `${word}`
                span.style.animationDelay = `${indx / 3}s`
                total = indx
                title.appendChild(span)
            })
            container.appendChild(title)
            const subTitleContent = document.createElement("div")
            subTitleContent.classList.add("kayakingsubtitle")
            let subtitle = content.subtitle
            total += 1
            let sectotal = 0
            subtitle.split(' ').forEach((word, indx) => {
                let span = document.createElement('span')
                span.textContent = `${word}`
                span.style.animationDelay = `${(total + indx) / 5}s`
                sectotal = total + indx
                subTitleContent.appendChild(span)
            })
            container.appendChild(subTitleContent)
            const descriptionWrapper = document.createElement("div")
            descriptionWrapper.classList.add("kayakingsummary")
            let description = content.description
            sectotal += 1
            description.split(' ').forEach((word, indx) => {
                let span = document.createElement('span')
                span.textContent = `${word}`
                span.style.animationDelay = `${(sectotal + indx) / 5}s`
                descriptionWrapper.appendChild(span)
            })
            container.appendChild(descriptionWrapper)
        }
    }, [])
    return (
        <div className='kayakingpagewrapper'>
            <div className='kayakingcontentwrapper'>
                <div ref={kayakingInfoContainer} className='kayakingcontent'>
                    {/* children will be added by js */}
                </div>
                <div className='coursewrapperonkayakingpage'>
                    {kayakinglessons.map((course, indx) => {
                        let features
                        let info
                        let btnAction = (_evnt) => { dispatch(setCurrentProduct(course)) }
                        if (course.title === 'Discover Kayaking 1.5 hrs') {
                            info = 'Enclosed Flat water'
                            features = ['One on one training', 'Learn balance and strokes', 'Water Safety and Gear Safety']
                        } else {
                            info = 'Shore and Ocean Paddling Course'
                            features = ['Training in the ocean!', ' Learn to manage understand currents and wind', 'Go farther! Experience long distance open water kayaking']
                        }
                        return (
                            <div key={indx} className='kayakingpagecourse'>
                                <div className='kayakingpagecoursehead'>
                                    <h2>{course.title}</h2>
                                    <span>{info}</span>
                                </div>
                                <div className='kayakingpagecoursebody'>
                                    <span className='coursepricetag'>{course.startPrice}</span>
                                    <span className='perperson'>per person</span>
                                    <div className='kayakingpagecoursefeaturebox'>
                                        <div className='kayakingpagecoursefeaturestrip'>
                                            <AiIcons.AiOutlineCheckCircle className='kayakcoursecheck' />
                                            <span>{features[0]}</span>
                                        </div>
                                        <hr className='linefromcourse'></hr>
                                        <div className='kayakingpagecoursefeaturestrip'>
                                            <AiIcons.AiOutlineCheckCircle className='kayakcoursecheck' />
                                            <span>{features[1]}</span>
                                        </div>
                                        <hr className='linefromcourse'></hr>
                                        <div className='kayakingpagecoursefeaturestrip'>
                                            <AiIcons.AiOutlineCheckCircle className='kayakcoursecheck' />
                                            <span>{features[2]}</span>
                                        </div>
                                    </div>
                                    <Link style={{textDecoration: 'none'}} to={'/bookclass/addproduct'}>
                                        <MaterialButton buttonAction={btnAction}
                                                        buttonStyle={{ margin: '20px', fontSize: 'larger' }}
                                                        buttoncontent={'Book Now'} />
                                    </Link>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <section className='kayakingpageinfowrapper'>
                <h2>KAYAKING T0URS CHENNAI</h2>
                <p>Join us on liquid trails. Kayak tours in Chennai and Tamilnadu.
                    Exploring nature in a fresh new angle. Talk to us to join our next lake Kayaking.
                    We also do Kayak rentals for seasoned Kayakers</p>
                <h2>Kayaking in Chennai, East Coast Road, Kovalam/covelong</h2>
                <p>
                    The Bay of Life beach is at a unique location. The closest usable beach of Chennai,
                    shallow and beautiful. Artificial groynes provide additional shelter and security from winds.
                    Surrounded by the Bay of bengal on one side and the Muttukadu backwaters on the other it provides a flexible option to choose your level of paddling depending on your skill level.
                    The cove itself is a boon provides very mellow currents and a shallow beach. The marine life is harmless ,
                    the water is warm. It can't get better than this.
                </p>
                <h2>Kayak rentals in Chennai, ECR , Kovalam, Mahabalipuram</h2>
                <p>We rent all rounder Kayaks that can handle flatwater and reasonably calm oceans.
                    They come with proper life vests and Kayak paddles.
                    Showers and changing rooms are available at Bay of Life to freshen up after your kayaking adventure.</p>
            </section>
            <section className='kayakingpagefaqwrapper'>
                <FaqBox styletext={{ color: 'antiquewhite' }} questiontext={' DO I NEED PRIOR EXPERIENCE FOR THE KAYAKING COURSE?'}
                    answertext={' No. We have courses for absolute beginners who have never entered the sea. We also have pro level courses.'} />
                <FaqBox styletext={{ color: 'antiquewhite' }} questiontext={'IS KNOWLEDGE OF SWIMMING REQUIRED TO LEARN KAYAKING?'}
                    answertext={'No. You will be wearing a life-vest all the time and guided one-on-one by an instructor.'} />
                <FaqBox styletext={{ color: 'antiquewhite' }} questiontext={'IS KAYAKING AT BAY OF LIFE SAFE?'}
                    answertext={`Definitely yes. Bay of Life has over seven years of experience in ocean sports and our founders have 20 years of experience in outdoor adventure.
                         You are in safe hands. Our beach and backwater is relatively calm and beginner friendly.`} />
                <FaqBox styletext={{ color: 'antiquewhite' }} questiontext={'WHERE ARE YOUR CAMPS?'}
                    answertext={`We are currently operating from our home turf which is Kovalam, near Muttukadu on East Coast Road. You can do your courses in an enclosed flat water, back water and the ocean.`} />
                <FaqBox styletext={{ color: 'antiquewhite' }} questiontext={`WHAT DO I NEED TO BRING ALONG?`}
                    answertext={`T-shirts and shorts/tights, sunscreen, towel, changing clothes.`} />
            </section>
        </div>)
}

export default Kayaking