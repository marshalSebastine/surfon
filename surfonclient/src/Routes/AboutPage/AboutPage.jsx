import { useEffect, useRef } from 'react';
import './AboutPage.css';
import * as GiIcons from 'react-icons/gi';

const AboutPage = () => {
    const teamwrapperref = useRef();
    const teammemberbox = useRef();
    useEffect(() => {
        if (teamwrapperref.current && teammemberbox.current) {
            let w = teammemberbox.current.clientWidth * 18 + 36 * 17
            teamwrapperref.current.style.width = `${w}px`
        }
    }, [])
    return (
        <div className='aboutpagewrapper'>
            <section className='wayoflifemovingpointswrapper'>
                <h1>
                    <span>Way of Ocean </span>
                    <div class="movingpoints">
                        <div class="word1">Social</div>
                        <div class="word2">Substainable</div>
                        <div class="word3">Impactful</div>
                    </div>
                </h1>
            </section>
            <section className='awardsncertificationboxeswrapper'>
                <div className='awardsncertificationbox'>
                    <h3>Accredited by the
                        <b>Surfing Federation of india & International Surfing Association</b>
                    </h3>
                    <p>
                        Bay of Life is Chennai’s first school to be accredited by the Surfing Federation of India- The National governing Body for Surfing In India.
                    </p>
                    <div className='stripiconcontainer'>
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                    </div>
                </div>
                <div className='awardsncertificationbox'>
                    <h3>INTERNATIONAL STANDARDS</h3>
                    <p>
                        Following highest standard of safety with ISA certified instructor, you know you are learning from the best.
                    </p>
                    <div className='stripiconcontainer'>
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                    </div>
                </div>
                <div className='awardsncertificationbox'>
                    <h3>Accredited by <b>the Government of Tamilnadu</b></h3>
                    <p>
                        Our team consists of three wilderness first responders certified by the National Outdoor Leadership School, USA
                    </p>
                    <div className='stripiconcontainer'>
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                        <GiIcons.GiStripedSun />
                    </div>
                </div>
            </section>
            <div className='teamwrapperouter'>
                <header className='meetteam'> Meet the team</header>
                <section ref={teamwrapperref} className='teamwrapper'>

                    <div ref={teammemberbox} className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Alice en Lano</h3>
                            <span>Founder</span>
                            <p>
                                A seasoned entrepreneur and a free-spirited adventure lover with a wide range of interests, ranging from law to herpetology! His many years of association with the people of Kovalam, stretching from pre-tsunami to post-tsunami times, paved the way for setting up Wave of Life Surf School in the village of Novalam
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Sidart Chandysarkal</h3>
                            <p>
                            Masters in Zoology, Siddharth’s passionate about surfing and marine life. At Bay of Life he does just the thing. A certified WFR from Nols and WMI. Loves dogs. Spearheading the school outdoor science programs at Bay of Life.
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Amritha</h3>
                            <span>Manager OPs</span>
                            <p>
                            Our manager, our go to person for everything from water in the showers to food, scheduling and customer care. Every time you had a great day at Bay of Life its 50% because of her.
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Kamesh</h3>
                            <span>Head Instructor ISA</span>
                            <p>
                            Friendly, lovable instructor hailing form Mahabalipuram . He is great with kids, very good surfer and a patient instructor
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Jai Shandy</h3>
                            <span>Manager Admin</span>
                            <p>
                            Manages the most difficult part of running a surf school. like water in the tank, clean bathrooms and ordering pizzas. 
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>AMavie Kani</h3>
                            <span>Head Instructor kayak.</span>
                            <p>
                            Friendly, lovable instructor hailing form Mahabalipuram fishing hamlet. He is great with kids, very good surfer and a patient instructor
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Seale mteve</h3>
                            <p>
                            AUSTSWIM instructor of swim training and water safety, loves dogs and an ocean enthusiast. Great with kids and a great addition to the Bay of life family.  
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Pishore</h3>
                            <span>Head Instructor</span>
                            <p>
                            Watch out for Kishore, he’s gonna be the next big wave surfer of Chennai
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>MangaThani</h3>
                            <span>Instructor.</span>
                            <p>
                            Friendly instructor, talented artist in woodcraft. 
                            </p>
                        </div>
                    </div>
                    <div  className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Alice en Lano</h3>
                            <span>Founder</span>
                            <p>
                                A seasoned entrepreneur and a free-spirited adventure lover with a wide range of interests, ranging from law to herpetology! His many years of association with the people of Kovalam, stretching from pre-tsunami to post-tsunami times, paved the way for setting up Wave of Life Surf School in the village of Novalam
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Sidart Chandysarkal</h3>
                            <p>
                            Masters in Zoology, Siddharth’s passionate about surfing and marine life. At Bay of Life he does just the thing. A certified WFR from Nols and WMI. Loves dogs. Spearheading the school outdoor science programs at Bay of Life.
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Amritha</h3>
                            <span>Manager OPs</span>
                            <p>
                            Our manager, our go to person for everything from water in the showers to food, scheduling and customer care. Every time you had a great day at Bay of Life its 50% because of her.
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Kamesh</h3>
                            <span>Head Instructor ISA</span>
                            <p>
                            Friendly, lovable instructor hailing form Mahabalipuram . He is great with kids, very good surfer and a patient instructor
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Jai Shandy</h3>
                            <span>Manager Admin</span>
                            <p>
                            Manages the most difficult part of running a surf school. like water in the tank, clean bathrooms and ordering pizzas. 
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>AMavie Kani</h3>
                            <span>Head Instructor kayak.</span>
                            <p>
                            Friendly, lovable instructor hailing form Mahabalipuram fishing hamlet. He is great with kids, very good surfer and a patient instructor
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Seale mteve</h3>
                            <p>
                            AUSTSWIM instructor of swim training and water safety, loves dogs and an ocean enthusiast. Great with kids and a great addition to the Bay of life family.  
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>Pishore</h3>
                            <span>Head Instructor</span>
                            <p>
                            Watch out for Kishore, he’s gonna be the next big wave surfer of Chennai
                            </p>
                        </div>
                    </div>
                    <div className='teammemberbox'>
                        <div className='teammemberboxcontentwrapper'>
                            <h3>MangaThani</h3>
                            <span>Instructor.</span>
                            <p>
                            Friendly instructor, talented artist in woodcraft. 
                            </p>
                        </div>
                    </div>
                   

                </section>
            </div>
        </div>
    )
}


export default AboutPage