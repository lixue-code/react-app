import React from 'react';
import classes from './CheckoutItem.module.css'
import Counter from "../../UI/Counter/Counter";

function CheckoutItem(props) {
    return (
        <div className={classes.CheckoutItem}>
           <div className={classes.ImgBox}>
               <img src={props.meal.img} alt='没找到图片'/>
           </div>
            <div className={classes.Desc}>
                <h4>{props.meal.title}</h4>
                <div className={classes.PriceOuter}>

                    <div>
                        <Counter meal={props.meal}></Counter>
                    </div>
                    <div className={classes.Price}>
                        {props.meal.amount * props.meal.price}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default CheckoutItem;