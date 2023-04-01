import "animate.css/animate.min.css";
import {AnimationOnScroll}  from 'react-animation-on-scroll'
import { useSelector } from 'react-redux';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import  {selectIsDesktop}  from './store/reducers/windowproperties/windowproperties.selector.js';
import  NavigationBar from './Routes/Navigation/navigation';
import Home from './Routes/Home/home';
function App() {
  const isDeskTop = useSelector(selectIsDesktop)


  return (
    <>
      {/* <AppBackGround/> */}
      <Routes>
          <Route element={<NavigationBar />} path="/">
              <Route index element={<Home/>} />
              <Route path='/surfing' element={<h1>Surfng</h1>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
