import React, { useContext, useState } from 'react'
import BackDrop from '../../UI/BackDrop/BackDrop'
import classes from './CartDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/CartContext'
import Meal from '../../Meals/Meal/Meal'
import Confirm from '../../UI/Confirm/Confirm'

export default function CartDetails() {

    const ctx = useContext(CartContext)
    const [showConfirm,setShowConfirm] = useState(false)

    const onCancelHandle = (e)=>{
        e.stopPropagation()
        setShowConfirm(false)
    }

    const onOkHandle = ()=>{
        //清空购物车
        // ctx.clearCart()
        ctx.cartDispatch({type:'CLEAR'})
        // setShowConfirm(false)
        // props.toggleCartDetials()
        
    }
    return (
        <BackDrop>

            {showConfirm && <Confirm ConfirmText="确认清空购物车吗？" onCancel={onCancelHandle} onOk={onOkHandle}></Confirm>}
            <div className={classes.CartDetails} onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h3 >商品详情</h3>
                    <div className={classes.Clear} onClick={()=>{setShowConfirm(true)}}>
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        <span>清空购物车</span>
                    </div>
                </header>
                <div className={classes.MealList}>
                    {ctx.items.map(item => <Meal meal={item} key={item.id} noDesc></Meal>)}
                </div>
            </div>
        </BackDrop>
        
    )
}
