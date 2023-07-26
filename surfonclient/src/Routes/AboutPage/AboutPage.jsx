import { useEffect, useRef } from 'react';
import './AboutPage.css';
import * as GiIcons from 'react-icons/gi';

const AboutPage = () => {
    const teamwrapperref = useRef();
    const teammemberbox = useRef();
    useEffect(() => {
        if (teamwrapperref.current && teammemberbox.current) {
            let w = teammemberbox.current.clientWidth * 18 + 36*17
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
                <section ref={teamwrapperref} className='teamwrapper'>

                    <div ref={teammemberbox} className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                    <div className='teammemberbox'>
                        <h3>Member Name</h3>
                        <span>postof member</span>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aspernatur ipsum nihil voluptatum maiores, voluptates perspiciatis fuga sequi non.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default AboutPage