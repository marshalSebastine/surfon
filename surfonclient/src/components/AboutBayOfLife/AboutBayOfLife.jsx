import './AboutBayOfLife.css'


const AboutBayOfLife = () => {
    return(
        <div className="aboutbayoflife">
            <div className="teaminfo">
                <h2>
                The Team
                </h2>
                <p className="aboutbayoflifecontent">
                {`Bay of Life team is a rare mix of surf instructors,
                 biologists, lifeguards, instructors, engineers and conservationists
                  united by one common passion – the ocean. With safety and expertise
                   certifications from NOLS USA, WMI USA, NIWS (IND), and the International
                    Surfing Association, we have built a team that is knowledgeable,
                     dedicated and approachable.`}
                </p>
                <a style={{textAlign: 'center'}}   
                           className="aboutbayoflifecontent" 
                    href="/meet-the-team">Click Here To Visit Team Bay of Life</a>
            </div>
            <div className="sportconservation">
                <h2>SPORT CONSERVATION EDUCATION</h2>
                <p className="aboutbayoflifecontent">{`Bay of life was formally created in 2011 to bring
                 about awareness on ocean conservation through sport,
                  education and community involvement.`} </p>
            </div>
        </div>
    )
}

export default AboutBayOfLife