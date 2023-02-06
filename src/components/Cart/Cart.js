import React, {useContext, useEffect, useState} from 'react'
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

    //购物车数量为0，隐藏详情页
    //useEffect 会在每次dom渲染完调用
    //useEffect可以传递第二个参数，类型是数组，指定useEffect的依赖（变量，或者函数），只有依赖发生变化，useEffect才会执行
    //useEffect中用到哪些，就需要把谁添加到依赖当中
    //如果依赖项设置了空数组，表示只会在初始化的时候执行一次
    useEffect(() => {
        if(ctx.totalAmount === 0){
            setShowCartDetials(false)
            setShowCheckout(false)
        }
    },[ctx,setShowCartDetials,setShowCheckout])

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
