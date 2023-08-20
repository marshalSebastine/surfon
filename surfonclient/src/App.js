import "animate.css/animate.min.css";
// import { useSelector } from 'react-redux';
import { Routes, Route } from "react-router-dom";
// import  {selectIsDesktop}  from './store/reducers/windowproperties/windowproperties.selector.js';
import  NavigationBar from './Routes/Navigation/navigation';
import Home from './Routes/Home/home';
import Checkout from "./Routes/Checkout/Checkout";
import BookClass from "./Routes/BookClass/BookClass.jsx";
import ProductDetails from "./Routes/ProductDetails/productDetails";
import OceanSwimming from "./Routes/OceanSwimming/OceanSwimming";
import Kayaking from "./Routes/Kayaking/Kayaking";
import Surfing from "./Routes/Surfing/surfing";
import Faq from "./Routes/Faq/Faq";
import { useEffect } from "react";
import { setAllProducts } from "./store/reducers/cartState/cartstate.reducer";
import { useDispatch } from "react-redux";
import CampsPage from "./Routes/Campspage/Campspage";
import ContactPage from "./Routes/Contact/Contact";
import AboutPage from "./Routes/AboutPage/AboutPage";
function App() {
  // const isDeskTop = useSelector(selectIsDesktop)

  const dispatch = useDispatch()
  
  useEffect(() => {
    const courseFetchUri = process.env.NODE_ENV === 'development' ? `http://localhost:4001/allcourses` : 'https://surfon.onrender.com/allcourses'
    fetch(courseFetchUri).then((response) => {
        if (response.status !== 200) {
            console.error('courses fetching error', response.status)
            return
        }
        response.json().then((res) => {
            res.sort(((coursea, courseb) => {
                if (coursea.startPrice < courseb.startPrice) return -1
                else { return 1 }
            }))
            dispatch(setAllProducts(res))
        })

    })
}, [])

  return (
    <>
      {/* <AppBackGround/> */}
      <Routes>
          <Route element={<NavigationBar />} path="/">
              <Route index element={<Home/>} />
              <Route path='/surfing' element={<Surfing/>}/>
              <Route path='/bookclass' element={<BookClass/>} />
              <Route path="/bookclass/addproduct" element={<ProductDetails/>}/> 
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/oceanswimming" element={<OceanSwimming/>}/>
              <Route path="/kayaking" element={<Kayaking/>}/>
              <Route path="/contact" element={<ContactPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/camps" element={<CampsPage/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;
