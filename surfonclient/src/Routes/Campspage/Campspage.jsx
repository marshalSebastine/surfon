import './CampsPage.css';
import * as BsIcons from 'react-icons/bs'
import FaqBox from '../../components/FaqBox/FaqBox';
import ItenaryClock from '../../components/ItenaryClock/ItenaryClock';
import { Session } from '../../components/ItenaryClock/ItenaryClock';
const CampsPage = () => {
    return (
        <>
            <section className='campspagebg'>
                <div className='campspagefiltercover'>
                    <h1 className='campspageheader'>Way of Life Day Camps</h1>
                </div>
            </section>
            <section className='beachclassroom'>
                <h2>Beach Classroom</h2>
                <p className='beachclassroompara'>
                    This nature day camp is a unique quarterly camps conducted at the quiet beach of Kovalam,East Coast Road, Chennai.
                    With shaded tents on the beach and clear skies this is a great camp to introduce your children to outdoor learning;
                    they will learn, explore and become friends with nature.
                </p>
                <p className='beachclassroompara'>
                    (Optional) learn how to surf the gentle waves of Kovalam.
                    Please pre book a session from our surfing sessions page.
                </p>
                <p>20 seats per batch</p>
                <div className='contactforcamp'>
                    <BsIcons.BsPhoneVibrate />
                    <p>75xx 8xx 5xx</p>
                </div>
            </section>
            <section className='stickyholder'>
                <header className="campsfeaturesectionheader  subheader0">Marine Science Camp Details</header>
                <article className="campsfeaturesectionarticle itenaryclockwrapper">
                    <ItenaryClock>
                        <Session period={'am'} taskheading={'Assenmble at way of life'}
                            tasklist={['Beach walk & Scavenger hunts',
                                'Observe Live marine animals and their habitats',
                                'Ocean Safety']}
                            hh={8} mm={0} />
                        <Session period={'pm'} taskheading={'Lunch'}
                            tasklist={['Sit together to have luch packed from Sangeetha Bhavan(Veg)',
                                'Dont forget to have fun chatting :)']}
                            hh={12} mm={0} />
                        <Session period={'pm'} taskheading={'Post Lunch Session'}
                            tasklist={['Understanding Tides',
                                'Studying Estuary & Birds',
                                'Backwater ecosystem study',
                                'Flatwater Safety']}
                            hh={12} mm={45} />
                        <Session period={'pm'} taskheading={'Reflection in the learnings'}
                            hh={4} mm={30} tasklist={[]} />
                        <Session period={'pm'} taskheading={'Pickup and Departure'}
                            hh={5} mm={30} tasklist={[]} />

                    </ItenaryClock>
                </article>
                <header className="campsfeaturesectionheader subheader1" >We are scientists and outdoor professionals</header>
                <article className="campsfeaturesectionarticle camptutorswrapper">
                    <span className='camplistheader'>Organised By</span>
                    <p>
                        Bay of Life’s team of award winning biologists and herpetologists who are actively working on outdoor science,
                        nature education and ocean sports for the past 10 years.
                        With safety and expertise certifications from NOLS USA, WMI USA, NIWS ( IND),
                        We have built a team that is knowledgeable, dedicated, friendly and the best in the industry.
                        Creating a safe and fun learning experience for kids.
                    </p>
                    <span className='camplistheader'>Location</span>
                    <p>
                        Way of Life beach, Kovalam, ECR, Chennai
                        Duration: 8:00 AM- 4:30 PM
                    </p>
                </article>
                <header className="campsfeaturesectionheader subheader2">Frequently asked Questions</header>
                <article className="campsfeaturesectionarticle campfaqwrapper">
                        <FaqBox styletext={{color: 'black', border: '2px solid black'}}
                                questiontext={`CAN PARENTS JOIN THE KIDS ALONG FOR THE BEACH CAMP?`}
                            answertext={`Parents can accompany the child at an extra fee of Rs.500 lunch will be provided.`} />
                        <FaqBox styletext={{color: 'black', border: '2px solid black'}}
                                questiontext={`WHAT IS THE AGE GROUP FOR THE KIDS TO ATTEND THE CAMP?`}
                            answertext={`7-15 yrs Old`} />
                        <FaqBox styletext={{color: 'black', border: '2px solid black'}}
                                questiontext={`HOW MUCH DOES THE CAMP COST?`}
                            answertext={`Rs.2985/-  Includes Lunch and Snacks (Vegetarian)`} />
                        <FaqBox styletext={{color: 'black', border: '2px solid black'}}
                                questiontext={`CAN YOU SHARE THE LOCATION IF WE ARE DROPPING THE KIDS ON OUR KIDS ON OUR OWN?`}
                            answertext={`You can drop your kids off at Way of Life, Kovalam / Covelong, East Coast Road, Chennai 603112`} />
                        <FaqBox styletext={{color: 'black', border: '2px solid black'}}
                                questiontext={`WHAT KIND OF LUNCH IS PROVIDED?`}
                            answertext={`We provide basic packaged Vegetarian meals and refreshments for the kids`} />
                </article>
            </section>
        </>

    )
}

export default CampsPage