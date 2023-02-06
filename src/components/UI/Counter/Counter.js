import React, { useContext } from 'react'
import classes from './Counter.module.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/CartContext'


/**
 * 引入图标字体库
 * @param {*} props 
 * @returns 
 *  npm i --save @fortawesome/fontawesome-svg-core
    # Free icons styles
    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons
    npm i --save @fortawesome/react-fontawesome@latest
 */

export default function Counter(props) {
    const ctx = useContext(CartContext)
    const meal = props.meal

    const onAddHandler = () => {
        // ctx.addItem(meal)
        ctx.cartDispatch({type:'ADD',meal:meal})
    }

    const onRemoveHandle = () => {
        ctx.cartDispatch({type:'REMOVE',meal:meal})
    }
  return (
    <div className={classes.counter}>

        {
            meal.amount && meal.amount !== 0 ? (
                <>
                    <button className={classes.sub} onClick={onRemoveHandle}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className={classes.count}>{props.meal.amount}</span>
                </>
            ) : null
        }
     
      <button className={classes.add} onClick={onAddHandler}>
         <FontAwesomeIcon icon={faPlus} />
          {/* <span>+</span> */}
      </button>
    </div>
  )
}
