import AppBackGround from "../../components/app-background/app-background"
import Corousel from "../../components/Corousel/crorousel"
import './home.styles.css';
import { SlideData } from "../../Model/SlideData";
import {selectCorouselSlide } from "../../store/reducers/corouselState/corouselstate.selector";
import { useSelector } from "react-redux";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import truckimg from '../../assets/truckwithboard.jpg';
import mansurfing from '../../assets/rename.jpg';
import kayaking from '../../assets/kayaking.jpg'
import standuppaddling from '../../assets/standuppaddling.jpg'
import oceanswimming from '../../assets/oceanswimming.jpg'
import ActivityInfo from "../../components/Activity-Info/Activity-Info";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import teamouting from '../../assets/team-outing-surfing.jpg';
import oceansafety from '../../assets/ocean-safety.jpg';
import ReviewCorousel from "../../components/review-corousel/review-corousel";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";
import AboutBayOfLife from "../../components/AboutBayOfLife/AboutBayOfLife";
import ContactUs from "../../components/ContactUs/ContactUs";
const Home = () => {
    let currentSlide = useSelector(selectCorouselSlide)

    return(
    <>
        <AppBackGround/>
        <div className="car-logo-container">
            <img className="logo-image" src="/bay-of-life-logo-web.png" alt="brand logo"/>
            <h2 className="celebrate-text">Celebrating 10 years of safe ocean sport! Since 2011</h2>
            <div className="contact-socialmedia">
                <GrIcons.GrFacebook className="socialmedia-icons"/>
                <AiIcons.AiFillYoutube  className="socialmedia-icons"/>
                <AiIcons.AiFillInstagram className="socialmedia-icons"/>
            </div>
            <Corousel>
                {SlideData.map((val,index) => {
                    return(
                    <div className="slide-element" key={index+1}>
                        <div style={{backgroundImage: `url("/${val.imgName}")`}} className="slide-bg">
                            <div className={`text-body ${index+1 === currentSlide ? 'get-text-up' : ''}`}>
                                <p className="main-title">{val.mainTitle}</p>
                                <p className="sub-title">{val.subTitle}</p>
                            </div>
                        </div>
                    </div>)
                    })}
            </Corousel>
            <ActivityInfo header={'School for Surfing, Ocean sport & Ocean literacy'}
                          activityinfotxt={'Great fun comes with great knowledge of the ocean. Bay of Life combines knowledge, Ocean science and sport in the teaching methodologies for a wholesome and proper introduction to the world of ocean sports and surfing in Chennai.'}
                          buttontext={'Book Class'}
                          buttonlink={'/book-class'}
                          faqbttn={true}
                          />
            <div className="activity-bg" style={{backgroundImage: `url(${truckimg})`}}/>
            <ActivityInfo header={'Surfing'}
                          activityinfotxt={'Learn surfing at Bay of Life, Chennai’s first accredited surf school. Our surf spot is beginner friendly, shallow & clean. Join our well rounded institution to get you initiated and you are sure to discover an ocean of joy Format: Experiences, Classes and Structured courses'}
                          buttontext={'Surfing experiences & courses'}
                          buttonlink={'/portfolio-7-surf-school-chennai'}
                          faqbttn={false}
                          />
            <div className="activity-bg" style={{backgroundImage: `url(${mansurfing})`,backgroundPosition: 'center center'}}/>
            <ActivityInfo header={'Kayaking'}
                          activityinfotxt={'We introduced flat water & Ocean Kayaking in Chennai. Now Kayaking is closer to home than ever, situated in Kovalam on ECR. Bay of Life offers discover, ocean and pro Kayaking courses. Kayaking in Chennai was never this approachable. Format: Experiences, Classes and Structured courses & Rentals'}
                          buttontext={'Book Class'}
                          buttonlink={'/book-class'}
                          faqbttn={false}
                          />
            <div className="activity-bg" style={{backgroundImage: `url(${kayaking})`,backgroundPosition: 'center top'}}/>
            <ActivityInfo header={'Standup Paddling'}
                          activityinfotxt={'Learn from the introducers of paddleboarding in India, fully certified team and Limca record holders. A team worth your time and effort. By far the most easiest and fastest growing water sport in the world Format: Experiences, Classes and Structured courses & Rentals'}
                          buttontext={'Book Class'}
                          buttonlink={'/book-class'}
                          faqbttn={false}
                          />
            <div className="activity-bg" style={{backgroundImage: `url(${standuppaddling})`,backgroundPosition: 'center center'}}/>
            <ActivityInfo header={'Ocean Swim'}
                          activityinfotxt={'Learn with the pioneers of ocean swim and ocean literacy in India, Bay of Life is Chennai’s first surf school. First accredited in India, fully certified crew from NOLS (USA), WMI (USA) , SFI (IND) , NIWS ( Goa). With more than 9 years experience in the ocean Bay of Life has trained over 8000 men and women, including 8 year olds in ocean sport. Get on board. Format: Introductory Session & Course'}
                          buttontext={'Book Class'}
                          buttonlink={'/book-class'}
                          faqbttn={false}
                          />
            <div className="activity-bg" style={{backgroundImage: `url(${oceanswimming})`,backgroundPosition: 'center top'}}/>
            <ActivityCard header={'Team Outing'}
                          activityinfotxt={'Chennai’s favorite team outing activity. Ideal for corporates and clubs. Customised, exclusive, nothing like you experienced before. For Friends & Family groups and Corporate groups'}
                          buttontext={'Go to page'}
                          cardimage={teamouting}
                          buttonlink={'/team-outing-chennai-activities-games/'}
                          />
            <ActivityCard header={'Ocean Safety'}
                activityinfotxt={'Make the ocean your playground. Learn to read the ocean like a book, learn to float in the ocean, understand currents, wave science and more. Instructors: Showkath, Siddharth, Kamesh, Michea'}
                cardimage={oceansafety}
                />
                <div className="reviewbox">
                    <div className="reviewbox-top">
                        <GoogleLogo style={{ width: '200px', height: '50px' }} />
                        <div>
                            {[...Array(5)].map((_item, indx) => {
                                return (
                                    <AiIcons.AiFillStar key={indx} style={{ fontSize: '48px', color: 'gold' }} />
                                )
                            })}
                        </div>
                        <p>Based on <strong>1024 reviews</strong></p>
                    </div>
                    <ReviewCorousel />
                    <AboutBayOfLife/>
                    <ContactUs/>
                </div>

        </div>

    </>
    )
}

export default Home