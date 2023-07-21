import './surfing.styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllProducts } from '../../store/reducers/cartState/cartstate.selector';
import { setCurrentProduct } from '../../store/reducers/cartState/cartstate.reducer';
import { Link } from 'react-router-dom';
import FaqBox from '../../components/FaqBox/FaqBox';
import * as MdIcons from "react-icons/md";
import * as SiIcons from "react-icons/si";
const Surfing = () => {


    const dispatch = useDispatch();

    let surflessons = useSelector(selectAllProducts).filter((course, _indx) => {
        return course.category === 'surfing'
    });
    let introlessons = surflessons.filter((course, _indx) => {
        return course.level === 1
    })
    let advlessons = surflessons.filter((course, _indx) => {
        return course.level === 2
    })

    return (
        <>
            <section className='surfpageintropic'>
                <h2 className='settexthidevisible surfpageintropicheader'>CHENNAI'S FIRST SURF SCHOOL</h2>
                <h4 className='settexthidevisible surfpageintropiccontent'>For first timers who want to just try for a day and for those who want
                    see if surfing is your cup of tea, go for our Discover Surf plans.
                    Then, Bay Of Life's structured continuous learning
                    courses make you proficient in the sport and in ocean safety,
                    no matter which beach your travels might take you to.</h4>
                <span className='settexthidevisible surfpageintropiccontact'>BOOK A CLASS / COURSE /EXPERIENCE- CALL 99404 XXXXX</span>
            </section>
            <div className='surfvaluecontainer'>
                <section className='whatuget'>

                    <h2>What You Learn .</h2>
                    <div className='surfvaluecontainerlistwrapper'>
                        <ul className='surfvaluecontainerlist'>
                            <li>Surfing in the sea!</li>
                            <li>Catching waves and surfing</li>
                            <li>Knowledge of surfing</li>
                            <li>How to read the ocean and weather</li>
                            <li>Understanding waves and rip</li>
                            <li>Loads of ocean safety</li>
                            <li>Specially designed and time tested curriculum by Bay of Life</li>
                            <li>Experience certified instructors. Knowledgeable,  friendly & approachable team. </li>
                        </ul>
                    </div>
                </section>
                <section className='whatuget'>
                    <h2>What You Train For .</h2>
                    <div className='surfvaluecontainerlistwrapper'>
                        <ul className='surfvaluecontainerlist'>
                            <li>Surf training on soft-top boards & Hard top board depending on skill level. </li>
                            <li>Understanding surf equipment and gear</li>
                            <li>Surfing methodology and skill training</li>
                            <li>Entering and exiting the water safely</li>
                            <li>Surf etiquette</li>
                            <li>Understanding various types of currents in the sea</li>
                            <li>Secondary surfing safety skills</li>
                            <li>Exceptional Understanding of waves and breaks </li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className='wavelayered bluewave' />
            <h2 className='surfpagesecondheader'>Surfing Experiences & Courses</h2>
            <p className='surfpagesecondcontent'>All packages include- sport specific instructors,
                boards, equipment, showers & change rooms</p>
            <section className='introclassescontainer'>
                <h3>First Time Tryouts & Experience</h3>
                <div className='introclasseswrapper'>
                    {introlessons.map((course, indx) => {
                        return (
                            <div className='classdetailcard'>
                                <h4>{course.title}</h4>
                                <p>{course.intro}</p>
                                <Link onClick={(_evnt) => { dispatch(setCurrentProduct(course)) }}
                                    to={'/bookclass/addproduct'}>
                                    Book Class.
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='introclassescontainer'>
                <h3>Structured Courses</h3>
                <div className='introclasseswrapper'>
                    {advlessons.map((course, indx) => {
                        return (
                            <div key={indx} className='classdetailcard'>
                                <h4>{course.title}</h4>
                                <p>{course.intro}</p>
                                <Link onClick={(_evnt) => { dispatch(setCurrentProduct(course)) }}
                                    to={'/bookclass/addproduct'}>
                                    Book Class.
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='surfatbayoflife'>
                <h4>Why Bay of Life ?</h4>
                <h2>
                    Learn right, stay safe and make the ocean your playground
                </h2>
                <div className='surffeaturecards'>
                    <div className='featurecard'>
                        <MdIcons.MdSupport className='featurecardicon' />
                        <h3>PROFESSIONAL SAFETY</h3>
                        <p>Professionals Certified by International Surfing Association, Surfing Federation of India, Wilderness medicine institute USA and NOLS USA. You are in safe hands</p>
                    </div>
                    <div className='featurecard'>
                        <SiIcons.SiTrustpilot className='featurecardicon' />
                        <h3>TRUSTED KNOWLEDGE</h3>
                        <p>Bay of Life is known for its scientific approach to ocean safety and sport. Benefit from 9 years of ocean studies and research</p>
                    </div>
                    <div className='featurecard'>
                        <MdIcons.MdChildFriendly className='featurecardicon' />
                        <h3>CHILD FRIENDLY SHALOW BEACH</h3>
                        <p>The Bay of Life Surf spot is shallow and sheltered in the cove of Kovalam, a safe haven for beginners and non swimmers.</p>
                    </div>

                </div>
            </section>
            <section className='faqcontainer'>
                <div className='faqtitlecontainer'>
                    <h3 className='faqtitle'>FAQ'S</h3>
                </div>
                <div className='line'></div>
                <FaqBox answertext={`Of course! That’s the point! First timers can learn to surf with us. You also get to learn about the sea and ocean swimming.`}
                    questiontext={`I don't know surfing and sea swimming, will I be able to learn surfing?`} />
                <FaqBox questiontext={`Do I need to know swimming?`}
                    answertext={`For discover surf you don’t. For the courses basic pool swimming is required. Ocean swimming is part of the course.`} />
                <FaqBox questiontext={`How safe is it?`}
                    answertext={`We are Chennai’s first surf school and first accredited one. With a beginner friendly shallow beach and 5 safety certification and accreditation from SFI you are in safe hands. Both team wise and beach wise!
                        `} />
                <FaqBox questiontext={`Are there any age limits?`}
                    answertext={`7 years to 99 yrs`} />
            </section>
        </>)
}

export default Surfing;