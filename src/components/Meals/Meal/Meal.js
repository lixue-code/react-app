import React from 'react'
import Counter from '../../UI/Counter/Counter'
import classes from './Meal.module.css'

export default function Meal(props) {

  return (
    <div className={classes.meal}>
      <div className={classes.imgBox}>
          <img src={props.meal.img} alt='没找到'></img>
      </div>
      <div className={classes.DescBox}>
          <h2 className={classes.title}>{props.meal.title}</h2>
          {props.noDesc ? null : <p className={classes.desc}>{props.meal.desc}</p>}
          <div className={classes.priceWarp}>
              <span className={classes.price}>{props.meal.price}</span>
              <div>
                  <Counter meal={props.meal}></Counter>
              </div>
          </div>
      </div>
    </div>
  )
}
