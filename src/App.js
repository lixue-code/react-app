import React, { useState } from 'react'
import Cart from './components/Cart/Cart'
import FilterMeals from './components/FilterMeals/FilterMeals'
import Meals from './components/Meals/Meals'

import CartContext from './store/CartContext'

const MELAS_DATA = [
    {
        id:'001',
        title:'汉堡包',
        desc:'百分百美味经典滋味百分百美味经典滋味百分百美味经典滋味',
        price:12,
        img:'/img/meals/1.png'
    },
    {
        id:'002',
        title:'鸡腿堡',
        desc:'百分百美味经典滋味百分百美味经典滋味百分百美味经典滋味',
        price:13,
        img:'/img/meals/2.png'
    },
    {
        id:'003',
        title:'铁板堡',
        desc:'百分百美味经典滋味百分百美味经典滋味百分百美味经典滋味',
        price:15,
        img:'/img/meals/3.png'
    },
    {
        id:'006',
        title:'铁板堡',
        desc:'百分百美味经典滋味百分百美味经典滋味百分百美味经典滋味',
        price:15,
        img:'/img/meals/3.png'
    },
    {
        id:'004',
        title:'铁板堡',
        desc:'百分百美味经典滋味百分百美味经典滋味百分百美味经典滋味',
        price:15,
        img:'/img/meals/3.png'
    },
    {
        id:'005',
        title:'铁板堡',
        desc:'百分百美味经典滋味百分百美味经典滋味百分百美味经典滋味',
        price:15,
        img:'/img/meals/3.png'
    }
    
]


export default function App() { 

    /**
     * 存放食物列表的数据
     */
    const[meals,setMeals] = useState(MELAS_DATA)

    /**
     * 存储购物车数据
     */

    const [cart,setCart] = useState({
        items:[],
        totalAmount:0,
        totalPrice:0
    })

    const addItem = (meal)=>{
        const newCart = {...cart}
        //判断食物是否已经存在
        if(cart.items.indexOf(meal) === -1){
            meal.amount = 1
            newCart.items.push(meal)
        }else{
            meal.amount += 1
        }

         //修改商品总数
         newCart.totalAmount += 1
         //修改总金额
         newCart.totalPrice += meal.price
        setCart(newCart)
       
    }

    const removeItem = (meal)=>{
        const newCart = {...cart}
        meal.amount -= 1

        if(meal.amount === 0){
            //从购物车中移除商品
            newCart.items.splice(newCart.items.indexOf(meal),1)
        }
         //修改商品总数
         newCart.totalAmount -= 1
         //修改总金额
         newCart.totalPrice -= meal.price
         setCart(newCart)
    }

    //过滤食物列表的方法
    const filterMeals = (keyword)=>{
        const newMealsData = MELAS_DATA.filter(item => item.title.includes(keyword))
        setMeals(newMealsData)
    }

    //清空购物车
    const clearCart = ()=>{
        const newCart = {...cart}
        //清空所有meal的amount
        newCart.items.forEach(item => delete item.amount)
        newCart.items = []
        newCart.totalAmount = 0
        newCart.totalPrice = 0
        setCart(newCart)
    }

    return (
        <CartContext.Provider value={{...cart,addItem,removeItem,clearCart}}>
            <div>
            
                <FilterMeals onSearch={filterMeals}></FilterMeals>
                <Meals meals={meals}></Meals>
                <Cart></Cart>
                
                
            </div>
        </CartContext.Provider>
      
    )
}
