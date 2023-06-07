import './Checkout.styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartItem } from '../../store/reducers/cartState/cartstate.reducer';
import { selectCartProducts } from '../../store/reducers/cartState/cartstate.selector';
import { getPrice } from '../../utils/styleutils';
import { ReactComponent as EmptyCartIcon } from '../../assets/empty-cart.svg';
import MaterialButton from '../../components/ripple-button/ripple-button';

const CartEmpty = () => {
    return (
        <div className='cart-empty-container'>
            <EmptyCartIcon style={{ height: '200px', width: '200px' }} />
            <p style={{ fontSize: 'x-large', fontWeight: '500' }}>Cart is Empty!</p>
        </div>)
}

const ProductDetailTitles = () => {
    return(
        <div className='productdetailtitlecontainer'>
            <div className='productclosetitle'></div>
            <div className='productimagetitle'></div>
            <p className='cartproducttitle'>Product</p>
            <p className='productdatetitle'>Start Date</p>
            <p className='productquantitytitle'>Quantity</p>
            <p className='productpricetitle'>Price</p>
        </div>
    )
}
const CartTotalRow = ({total}) => {
    return(
        <div className='cartproducttotalrow'>
            <div className='cartttotalwrapper'>
                <p className='carttotal'>Total:</p>
                <p className='carttotalvalue'>{total}</p>
            </div>
        </div>
    )
}
const Checkout = () => {

    const dispatch = useDispatch()
    const cartProducts = useSelector(selectCartProducts)
    const purchasedProducts = cartProducts.filter(prdct => prdct.quantity !== 0)
    let total = 0;

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }
    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        // creating a new order
        const result = await fetch("http://localhost:3000/orders",
         { method: 'POST',
           headers: {
              'Content-Type': 'application/json'
            },
           body: JSON.stringify({productsPurchasing: purchasedProducts})});

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        let dta = await result.json()
        console.log('response from server',dta)
        // Getting the order details back
        const { amount, id: order_id, currency } = dta;

        const options = {
            key: "rzp_test_TPWorRxK42iY8l", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };
                console.log(response);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    function getPriceOfPrdct(prdct) {
        if (prdct.endPrice) {
            return getPrice(prdct.dateSelected, prdct.startPrice, prdct.endPrice, prdct.quantity)
        } else {
            return prdct.startPrice * prdct.quantity
        }
    }

    const handleRemoveButtonClick = (prdct) => (_evnt) => {
        dispatch(removeFromCart(prdct))
    }

    const startPurchase = (evnt) => {
        evnt.preventDefault()
        displayRazorpay()
    }
    const handleCourseQuantityChange = (prdct) => (evnt) => {
        prdct.quantity = evnt.target.value
        dispatch(updateCartItem(prdct))
    }
    return (
        <div className='checkoutcontainer'>
            <h1 className='cartheader'>Cart</h1>
            <div className='cartcontainer'>
                {cartProducts.length === 0 && <CartEmpty />}
                {cartProducts.length !== 0 && <ProductDetailTitles/>}
                {cartProducts.length !==0 && 
                <div className='cartgridcontainer'> {
                    cartProducts.map((prdct,indx) => {
                        total += getPriceOfPrdct(prdct)
                        const extensibleProduct = {...prdct}
                        return(
                            <div key={indx} className='cartwrapper'>
                                <img alt='courseimg' src={process.env.PUBLIC_URL + '/' + prdct.imgName + '.jpeg'}
                                              height={'110px'} className='cartproductimage'
                                              width={'110px'} />
                                <button className='prdctremvebtn' onClick={handleRemoveButtonClick(prdct)}>
                                    X
                                </button>
                                <p className='productname'>{prdct.title}</p>
                                <p className='coursestartdate'>{prdct.dateSelected}</p>
                                <div className='cartproductquantitycontainer'>
                                        <label className='quantitylabel'>Quanity:</label>
                                        <div className='cartproductqntitywrap'>
                                          <input type='number' defaultValue={prdct.quantity} className='cartproductqntity'
                                                min={1} onChange={handleCourseQuantityChange(extensibleProduct)} />
                                        </div>
                                </div>
                                <p className='cartproductsubtotal'><span>&#8377;</span>{getPriceOfPrdct(prdct)}</p>
                            </div>
                        )
                    })
                }
                {cartProducts.length !== 0 && <CartTotalRow total={total}/>}
                {cartProducts.length !== 0 && <MaterialButton disabled={purchasedProducts.length === 0}
                                                buttoncontent={'Make Payment'} buttonAction={startPurchase}
                                                buttonStyle={{width: '120px',height:'55px',fontSize: '12px'}}/>}
                </div>}
            </div>
        </div>
    )
}

export default Checkout;