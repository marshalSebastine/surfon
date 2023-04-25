import "animate.css/animate.min.css";
// import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
// import  {selectIsDesktop}  from './store/reducers/windowproperties/windowproperties.selector.js';
import  NavigationBar from './Routes/Navigation/navigation';
import Home from './Routes/Home/home';
import BookClass from "./Routes/BookClass/BookClass.jsx";
import ProductDetails from "./Routes/ProductDetails/productDetails";
function App() {
  // const isDeskTop = useSelector(selectIsDesktop)


  return (
    <>
      {/* <AppBackGround/> */}
      <Routes>
          <Route element={<NavigationBar />} path="/">
              <Route index element={<Home/>} />
              <Route path='/surfing' element={<h1>Surfng</h1>}/>
              <Route path='/bookclass' element={<BookClass/>} />
              <Route path="/bookclass/checkoutproduct" element={<ProductDetails/>}/> 

          </Route>
      </Routes>
    </>
  );
}

export default App;
