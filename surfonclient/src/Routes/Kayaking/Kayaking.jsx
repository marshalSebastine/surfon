import { useRef, useEffect } from 'react';
import './kayaking.styles.css';

const Kayaking = () => {
    let kayakingInfoContainer = useRef();
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
                    span.style.animationDelay = `${(total+indx) / 5}s`
                    sectotal = total+indx
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
                    span.style.animationDelay = `${(sectotal+indx) / 5}s`
                    descriptionWrapper.appendChild(span)
                })
                container.appendChild(descriptionWrapper)
            }
        }, [])
    return (
        <div className='kayakingpagewrapper'>
            <div className='kayakingcontentwrapper'>
                <div ref={kayakingInfoContainer} className='kayakingcontent'>
                    {/* <h2>Kayaking In Chennai</h2> */}
                    {/* <div  className='kayakingsummary'>
                        <h4>Location: Kovalam- Muttukadu, Chennai</h4>
                        <p>
                        Learn from the introducers of Kayaking in Chennai. Now Kayaking is closer to home than ever, situated in Kovalam on ECR. Bay of Life offers discover kayaking in backwaters, ocean and pro Kayaking courses. Kayaking in Chennai was never this approachable before. Looking for unique fun family activities? Visit Bay of Life. Get your much deserved dose of weekend adventure with your family at the beach.
Bay of Life beach activities are safe for kids and adults alike. With our two seater and single seater kayaks you can take your family for a safe and joyful ride in the backwater or in our shetlered cove by the shore. There are always some fun beach actvities that will engage your family at Bay of Life
                        </p>
                    </div> */}
                </div>
            </div>
        </div>)
}

export default Kayaking