import { useSelector, useDispatch } from 'react-redux';
import './productDetails.styles.css';
import { selectAllProducts, selectCartCurrentProduct } from '../../store/reducers/cartState/cartstate.selector';
import { addToCart } from '../../store/reducers/cartState/cartstate.reducer';
import { useEffect, useRef, useState } from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import { isDayWeekend } from '../../utils/styleutils';
import MaterialButton from '../../components/ripple-button/ripple-button';
import { selectCartProducts } from '../../store/reducers/cartState/cartstate.selector';


const ListIt = ({header,learn}) => {
    return(
        <>
            <p style={{fontSize: 'x-large', fontStyle: 'italic'}}>{header}</p>
            <dl>
                {learn.map((learn,indx) => {
                    return(<dd key={indx} id='dditem' style={{fontSize: 'large', padding: '3px 0px'}}>{learn}</dd>)
                })}
            </dl>
        </>
    )
}

const RelatedProducts = ({related}) => {
    return(
        <div className='relatedcoursewrapper'>
            <h2 style={{fontSize: 'xx-large', textAlign:'center',
            padding: '4px',margin: '0px',
             fontWeight: '600'}}>Related Courses</h2>
            <div className='relatedcoursesbox'>
            {related.map((course, index) => {
                    return (<CourseCard onhovertext={'Book Class'} course={course} imgname={course.imgName}
                                         goto={`/bookclass/addproduct`}  key={index} />)
                })}
            </div>
        </div>
    )
}

const ProductDescription = ({prdct}) => {
    return(
        <div className='description-container'>
            <h2 style={{fontSize: 'xx-large', fontWeight: '600',margin: '6px', textAlign: 'left'}}>Description</h2>
            {prdct.desctitle && <p style={{fontSize: 'large'}}>{prdct.desctitle}</p>}
            {prdct.descbody && <p style={{fontSize: 'large'}}>{prdct.descbody}</p>}
            {(prdct.learn.length !== 0) && <ListIt header={'What You Learn: '} learn={prdct.learn}/>}
            {(prdct.included.length !== 0) && <ListIt header={'What is included: '} learn={prdct.included}/>}
        </div>
    )
}


const ProductDetails = () => {

    let product = useSelector(selectCartCurrentProduct)
    let cartproducts = useSelector(selectCartProducts)
    const extensibleProduct = useRef(Object.assign({ quantity: 1 }, product)).current
    const allCourses = useSelector(selectAllProducts);
    let relatedProducts = function(){
        let relatedCourseIds = product.relatedCourses
        return allCourses.filter((course) => {
            return relatedCourseIds.includes(course._id)
        })
    }()
    const dispatch = useDispatch()
    const numberInputRef = useRef(null)

    let [courseQuantity, setCourseQuantity] = useState(1);
    let [dateValidity, setDateValidity] = useState(false);
    let [isWeekend, setIsWeekend] = useState(null);
    let [mindate, maxdate] = getMinandMax()
    const disabled = product.multipleday ? false : !dateValidity
    console.log(disabled)
    const getTotalCoursePrice = () => {

        if(product.multipleday) return product.startPrice * courseQuantity
        if (product.endPrice && isWeekend) {
            return product.endPrice * courseQuantity
        } else if (isWeekend != null) {
            return product.startPrice * courseQuantity
        }
    }
    let totalCoursePrice = getTotalCoursePrice()



    function getMinandMax() {
        let currentDate = new Date()
        const year = currentDate.getFullYear();
        const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Add leading zero for single digit months
        const day = ("0" + currentDate.getDate()).slice(-2); // Add leading zero for single digit days
        let mindate = `${year}-${month}-${day}`
        let maxdate = `${year + 1}-${month}-${day}`;
        return [mindate, maxdate]
    }
    const handleCourseQuantityChange = (evnt) => {
        setCourseQuantity(evnt.target.value)
        extensibleProduct.quantity = evnt.target.value

    }
    const handleDateChange = (evnt) => {
        setDateValidity(evnt.target.checkValidity())
        if (evnt.target.checkValidity()) {
            extensibleProduct.dateSelected = evnt.target.value
            setIsWeekend(isDayWeekend(evnt.target.value))
        } else {
            setIsWeekend(null)
        }
    }

    function movePrdctEffect(){
        let prdctimage = document.getElementById('productimage')
        let ghostImage = new Image()
        let cart = document.getElementById('cartbox');
        if(!cart.classList.contains('hide')){
            ghostImage.src = process.env.PUBLIC_URL + '/' + product.imgName + '.jpeg'
            ghostImage.classList.add('productghostimage')
            ghostImage.style.left = `${prdctimage.getBoundingClientRect().left}px`
            ghostImage.style.top =`${prdctimage.getBoundingClientRect().top+18}px`
            document.body.appendChild(ghostImage)
            ghostImage.classList.add('moveghost')
            ghostImage.style.top = `${cart.getBoundingClientRect().top}px`
            ghostImage.style.left =`${cart.getBoundingClientRect().left}px`
            setTimeout(() => {
                cart.classList.add('shake')
                document.body.removeChild(ghostImage)
                cart.addEventListener('animationend',() => {
                    cart.classList.remove('shake')
                })
            },1000)
        }
    }

    const addCourseToCart = (_evnt) => {
        dispatch(addToCart(extensibleProduct))
    }

    useEffect(() => { 
        movePrdctEffect()
     },[cartproducts])
     
    useEffect(() => {
        if (!dateValidity && numberInputRef.current) {

            numberInputRef.current.value = undefined
        }
        else if (numberInputRef.current) {
            numberInputRef.current.value = 1
        }
    }, [dateValidity])

    useEffect(() => {
        if(window){
            console.log('document is available');
            window.scroll(0,0)
        }
    },[])
    useEffect(() => {
        totalCoursePrice = getTotalCoursePrice()
    }, [courseQuantity, isWeekend])
    return (
        <>
            <div className='productcontainer'>
                <img src={process.env.PUBLIC_URL + '/' + product.imgName + '.jpeg'}
                    alt='courseimage' id='productimage'
                    className='productimage' />
                <div id='productcontainer' className='productdateselect'>
                    <h2 className='producttitle'>{product.title}</h2>
                    {(product.endPrice) && <p className='productprice'>{`${product.startPrice}rs - ${product.endPrice}rs`}</p>}
                    {(!product.endPrice) && <p className='productprice'>{`${product.startPrice}rs`}</p>}
                    <p className='productlevel'>{product.expertiselevel}</p>
                    <p className='productintro'>{product.intro}</p>

                    {!product.multipleday && <table className='dateselectortable'>
                        <tbody className='dateselectorbody'>
                            <tr>
                                <td className='dateselectlabelcol'>
                                    <label className='dateselectlabel'>Select date :</label>
                                </td>
                                <td className='dateselectcol'>
                                    <input type='date' max={maxdate} onChange={handleDateChange}
                                        className='dateselectinput'
                                        min={mindate} required={true}
                                        placeholder='Select your date' />
                                    <div style={{ position: 'relative' }}></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>}
                    <p className='productdetailprice'>{totalCoursePrice}</p>
                    <p></p>
                    <div className='purchasecontainer'>
                        <div>
                            <label htmlFor='productquantityinput' className='classNumberInputLabel'>Quantity: </label>
                            <input name='productquantityinput' className='classNumberInput' ref={numberInputRef}
                                type='number' onChange={handleCourseQuantityChange}
                                max={10} disabled={disabled} defaultValue={1} min={1} />
                        </div>
                        <MaterialButton buttoncontent={'Add to cart'}
                                    buttonAction={addCourseToCart} disabled={disabled}
                                    buttonStyle={{width: '190px',height: '50px',fontSize: 'small',marginLeft: '50px',marginRight: 'auto'}}/>
                    </div>

                </div>
            </div>
            <div className='descandrelated'>
                {(product.desctitle || product.descbody) && <ProductDescription prdct={product}/>}
                <RelatedProducts related={relatedProducts}/>
            </div>
        </>)
}

export default ProductDetails