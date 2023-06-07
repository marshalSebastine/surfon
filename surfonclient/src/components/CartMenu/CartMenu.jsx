import './CartMenu.styles.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { selectCartProducts } from '../../store/reducers/cartState/cartstate.selector';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { removeFromCart } from '../../store/reducers/cartState/cartstate.reducer';
import MaterialButton from '../ripple-button/ripple-button';
import { getPrice } from '../../utils/styleutils';

const CartBox = ({ handleCartClick, hide, itemnumber }) => {

    return (
        <div id="cartbox" onClick={handleCartClick} className={hide ? 'cartboxcontainer hide' : "cartboxcontainer"}>
            <AiOutlineShoppingCart className="carticons" />
            <div className="cartcounter">
                <span>{itemnumber}</span>
            </div>
        </div>
    )
}
const CartMenuBarItem = ({ imgName, title, startPrice, quantity, _id, dateSelected, endPrice }) => {
    const dispatch = useDispatch()
    function handleCartItemRemoval(_evnt) {
        dispatch(removeFromCart({ _id, quantity, dateSelected }))
    }
    function getPriceOfCartItem(){
        if (endPrice){
            return getPrice(dateSelected,startPrice,endPrice,quantity)
        }else{
            return startPrice*quantity
        }
    }

    return (
        <div className='cart-menubar-item'>
            <img src={process.env.PUBLIC_URL + '/' + imgName + '.jpeg'} alt={"prdctimage"} className='cart-menubar-item-image' />
            <div className='cart-menubar-data'>
                <div className='cart-menubar-data-strip'>
                    <p style={{marginTop: '5px',fontWeight: '600'}}>{title}</p>
                    <button onClick={handleCartItemRemoval}>
                        <MdOutlineDeleteOutline style={{ width: '22px', height: '22px' }} />
                    </button>
                </div>
                {dateSelected && <i className='menubardate'>{dateSelected}</i>}
                <div className='cart-menubar-data-strip'>
                    <i className='menubar-qntity'>{quantity}</i>
                    <i>{getPriceOfCartItem()}</i>
                </div>
            </div>
        </div>
    )
}
const CartMenuBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    let cartProducts = useSelector(selectCartProducts)
    const navigation = useNavigate()
    const cartButtonStyle = {
        width: '100%',
        minHeight: '10px',
        marginBottom:  '3px',
        height: '50px',
        fontSize: 'medium',
        marginTop: 'auto'
    }
    function handleCartCheckoutButton(_evnt){
        navigation('/checkout')
    }

    function showHideCartMenu(_evnt) {
        setMenuOpen(!menuOpen)
    }

    return (
        <>
            <CartBox handleCartClick={showHideCartMenu} hide={menuOpen || cartProducts.length === 0} itemnumber={cartProducts.length} />
            <div className={menuOpen ? 'cart-menu-bar drawcart' : 'cart-menu-bar'}>
                <div className='cart-menu-head'>
                    <AiOutlineShoppingCart style={{ width: '17px', height: '17px' }} />
                    <p style={{ fontSize: 'larger', fontWeight: '500', padding: '0', margin: '0' }}>your cart</p>
                    <button id="cartclosebutton" onClick={showHideCartMenu}>
                        <GrFormClose style={{ width: '27px', height: '27px' }} />
                    </button>
                </div>
                <div className='cartmenubaritemwrapper'>
                    {cartProducts.map((prdct,indx) => {
                        return (<CartMenuBarItem key={indx} {...prdct} />)
                    })}
                </div>
                {/* buttoncontent, buttonAction, buttonStyle, disabled  */}
                <MaterialButton buttoncontent={'Checkout'} buttonStyle={cartButtonStyle}
                                disabled={cartProducts.length === 0}
                                buttonAction={handleCartCheckoutButton}/>
            </div>
        </>
    )
}


export default CartMenuBar