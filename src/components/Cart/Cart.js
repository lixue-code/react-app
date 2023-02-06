import React, { useContext, useState } from 'react'
import classes from './Cart.module.css'
import iconImg from '../../assert/bag.png'
import CartContext from '../../store/CartContext'
import CartDetails from './CartDetails/CartDetails'
import CheckOut from "../CheckOut/CheckOut";

export default function Cart() {

    const [showCartDetials,setShowCartDetials] = useState(false)
    //控制结账页面的显示隐藏
    const [showCheckout,setShowCheckout] = useState(false)
    const ctx = useContext(CartContext)
    const toggleCartDetials = ()=>{
        if(ctx.totalAmount === 0){
            return
        }
        setShowCartDetials(preState => !preState)
    }

    const showCheckoutHandle = ()=>{
        setShowCheckout(true)
    }

    const hideCheckoutHandle = ()=>{
        setShowCheckout(false)
    }
    return (
        <div className={classes.Cart} onClick={toggleCartDetials}>
            {showCheckout && <CheckOut hideCheckoutHandle={hideCheckoutHandle}></CheckOut>}

            {showCartDetials && <CartDetails></CartDetails>}
            
            <div className={classes.Icon}>
                <img src={iconImg} alt='找不到图片'></img>
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>}
                
            </div>

            {ctx.totalAmount === 0 ? <p className={classes.NoMeal}>未选中商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}  
            {/* <p className={classes.Price}>{ctx.totalPrice}</p> */}

            <button className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disable : ''}`} onClick={showCheckoutHandle}>去结算</button>
        </div>
    )
}
