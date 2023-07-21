import './faq.styles.css'
import FaqBox from '../../components/FaqBox/FaqBox'

const Faq = () => {
    return (
        <div className='faqpageparent'>
            <div className='faqpagetitlecontainer'>
                <h2 className='faqpagetitle'>FAQ.</h2>
            </div>
            <div className='faqpagequestionscontainer'>
                <FaqBox questiontext={`WHAT TO CARRY ALONG?`}
                    answertext={`Men: T shirt- (Half or full sleeve) and Shorts

                    Women: T shirt- (Half or full sleeve), Shorts/Tights
                    
                    Preferably quick dry material if possible.
                    
                    Towel, change of clothes, soap shampoo. Dry bag to carry wet clothes back.
                    
                    Sunscreen if required.`}/>
                <FaqBox questiontext={`HOW DO I BOOK MY FIRST SESSION`}
                        answertext={`You can book online under book a class  Or call us on 98846 59995 or email us your requirement at contact@bayoflife.com`}/>
                <FaqBox questiontext={`AGE, WEIGHT ETC ?`}
                        answertext={`Kids from 6+ can learn all sports.

                        Our oldest student is 67 yrs old
                        
                        Our heaviest student was 126 kgs when he joined`}/>
                <FaqBox questiontext={`CAN I CANCEL MY RESERVATION ?`}
                        answertext={`Cancellation are permitted upto 48 hours prior to your reservation date with refund. Cancellations within 48 hours can avail no refund but you can defer your dates.`} />
                <FaqBox questiontext={`I HAVE NEVER SURFED BEFORE, IS BAY OF LIFE SURF SCHOOL THE RIGHT ONE FOR ME?`}
                        answertext={`That’s the point of a surf school isn’t it? Many of our students have never surfed before, so don’t worry.

                        Bay of Life is Chennai’s first and Tamilnadu’s first accredited Surf School, accredited by The Surfing Federation of India and Surfing and Water Sports Association of Tamilnadu.  All our Trainers are certified in Basic Life Support by TACT INDIA, and a Wilderness First Responder Certification from The National Outdoor Leadership School, Wyoming USA. Our team has three national records and one world record and has been honoured with many awards.`}/>
                <FaqBox questiontext={`DO I NEED TO KNOW TO SWIM?`}
                        answertext={`
                        Not If you want to try it out for just the experience, you are welcome to do with our life vests on. however, you need to know swimming to join the surf courses,`}/>
                <FaqBox questiontext={`DO I NEED TO KNOW SWIMMING TO LEARN STAND UP PADDLING?`}
                        answertext={`
                        If you are learning only flat water stand up paddling a life vest will do the trick. if you want to learn to catch waves on a sup, you will be required to know swimming. Having said that, knowing to swim is important.`}/>
                <FaqBox questiontext={`WHAT’S THE BEST TIME OF THE DAY FOR BEGINNERS?`}
                        answertext={`Mornings are perfect , say 8 am onwards, depending on the high – low tide cycles, afternoon 3 pm works too!`}/>
                <FaqBox questiontext={`WHAT ALL CAN I LEARN?`}
                        answertext={`At Bay of Life you can learn surfing, standup paddling, snorkeling, kayaking and ocean swimming.`}/>
                <FaqBox questiontext={`WHAT IF I DAMAGE OR LOSE THE RENTED EQUIPMENT ?`}
                        answertext={`Please do replace the same in case you lose it, if damaged we will charge the repair cost.`}/>
                <FaqBox questiontext={`DO YOU REQUIRE A DEPOSIT ?`}
                        answertext={`Yes`}/>

            </div>
        </div>
    )
}

export default Faq