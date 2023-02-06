import React, {useContext} from 'react';
import ReactDOM from "react-dom";
import classes from './CheckOut.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import CheckoutItem from "./CheckoutItem/CheckoutItem";
import CartContext from "../../store/CartContext";

const checkoutRoot = document.getElementById('checkoutRoot')
function CheckOut(props) {

    const ctx = useContext(CartContext)
    console.log(ctx.items)

    return (
        ReactDOM.createPortal(<div className={classes.CheckOut}>
            {/*关闭按钮*/}
            <div className={classes.Close} onClick={() => {props.hideCheckoutHandle()}}>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </div>
            <div className={classes.MealDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>商品详情</h2>
                </header>
                <div className={classes.Meals}>
                    {ctx.items.map(item => <CheckoutItem meal={item} key={item.id}/>)}
                </div>
                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
                </footer>
            </div>


        </div>,checkoutRoot)
    //     test commit
    );
}

export default CheckOut;