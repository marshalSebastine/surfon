import { useSelector } from 'react-redux';
import './productDetails.styles.css';
import { selectCartCurrentProduct } from '../../store/reducers/cartState/cartstate.selector';


const ProductDetails = () => {
    let product = useSelector(selectCartCurrentProduct)
    return(
    <>
     <div className='productcontainer'>
        <img src={process.env.PUBLIC_URL + '/'+ product.imgName + '.jpeg'} 
             alt='courseimage'
             className='productimage'/>
        <div className='productdateselect'>
            <h2>title</h2>
            <p>price </p>
            <p>expert level</p>
            <p>intro</p>
            <div className='dayselectorcontainer'>
            </div>
            <p>effective price </p>
            <div className='dayselectorcontaiiner'>

            </div>
            <div className='timeselectorcontainer'>

            </div>
            <div className='purchasecontainer'>

            </div>
        </div>
     </div>
    </>)
}

export default ProductDetails