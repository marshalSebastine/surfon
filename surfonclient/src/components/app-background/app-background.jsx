import './app-background.styles.css';
import {useEffect, useRef} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWindowWidth } from '../../store/reducers/windowproperties/windowproperties.reducer';
import BackGroundTitleDesktop from '../bg-title-desktop/bg-title-desktop.jsx';
import BackGroundTitleLite from '../bg-title-lite/bg-title-lite.jsx';
import { selectWindowWidth } from '../../store/reducers/windowproperties/windowproperties.selector';

const AppBackGround = () => {

    let widthed = useSelector(selectWindowWidth);
    const dispatch = useDispatch();
    const appBackground = useRef();
    // const scrolledOut = useRef(false);
    // let [getSmall,setGetSmall] = useState(false);

    const updateDimensions = () => {
        const width = window.innerWidth
        dispatch(setWindowWidth(width))
      }

    // const respondToScroll = (_) => {
    //     let {top,bottom} = appBackground.current.getBoundingClientRect()
    //     if(top < -window.innerHeight/5){
    //         console.log('setting get small true')
    //         if(!scrolledOut.current){ 
    //              setGetSmall(true);
    //             }
    //     }
    //     if(bottom < 0) {scrolledOut.current = true}
    //     if(bottom >= 10 && scrolledOut.current) {
    //         console.log('setting get small false')
    //         setGetSmall(false);
    //         setTimeout(() => {scrolledOut.current = false},1000)
    //     }
    // }

    useEffect(() => { 
        updateDimensions();
        window.addEventListener("resize",updateDimensions);
        return () => 
          window.removeEventListener("resize",updateDimensions);
    // eslint-disable-next-line
       }, [])
    let bgtitle;
    if(widthed < 550) bgtitle = <BackGroundTitleLite/> 
    else{
       bgtitle = <BackGroundTitleDesktop/>
    }
    return(
    <div ref={appBackground}className={`cover-bg`}>
        {bgtitle}
    </div>)
}

export default AppBackGround