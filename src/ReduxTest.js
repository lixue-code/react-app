import React, {useReducer} from 'react';

//避免reducer重复创建,reducer通常定义在组件外部
const countReducer = (state,action)=>{
    // console.log('reducer执行了',state)
    console.log(action)
    //判断执行的操作
    if(action.type === 'ADD'){
        return state + 1
    }else if(action.type === "SUB"){
        return state - 1
    }
    return state
}

function ReduxTest() {
    // const [count,setCount] = useState(0)
    /**
     * useReducer()
     * reducer返回值是state的新值
     * reducer 第一个参数是最新的state
     * reducer 第二个参数是action,是一个对象，可以从dispatch中传进来
     * 对一个state 的操作，全部整合到reducer里面
     */
    const [count,countDispatch] = useReducer(countReducer,0)

    const onAddHandle = ()=>{
        //传入需要的action
        countDispatch({type:'ADD'})
    }

    const onSubHandle = ()=>{
        countDispatch({type:'SUB'})
    }

    return (
        <div>
            <button onClick={onAddHandle}>+</button>
            <span>{count}</span>
            <button onClick={onSubHandle}>-</button>
        </div>
    );
}

export default ReduxTest;