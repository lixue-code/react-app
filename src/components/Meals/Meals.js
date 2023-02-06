import React from 'react'
import Meal from './Meal/Meal'
import classes from './Meals.module.css'

export default function Meals(props) {
    const meals = props.meals
    return (
        <div className={classes.meals}>
            {
                meals.map(item => 
                            <Meal meal={item} 
                                key={item.id}> 
                            </Meal>)
            }
        </div>
    )
}
