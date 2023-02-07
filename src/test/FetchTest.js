import React, {useEffect} from 'react';
import StudentList from "./StudentList";
import classes from './FetchTest.module.css'
import FetchContext from "./store/FetchContext";
import useFetch from './hooks/useFetch'
function FetchTest() {
    const {data:stuData,fetchData,loading,error} = useFetch({
        url:'students'
    })
    //利用钩子函数，模拟生命周期，只在初始化的时候发送请求加载数据
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <FetchContext.Provider value={{fetchData}}>
            <div className={classes.App}>
                <button onClick={fetchData}>刷新数据</button>
                {(!loading && !error) && <StudentList stus={stuData}></StudentList>}
                {loading && <p>数据正在加载</p>}
                {/*error是一个对象*/}
                {error && <p>数据加载异常</p>}
                {/*<StudentList stus={stuData}></StudentList>*/}
            </div>
        </FetchContext.Provider>
    );
}

export default FetchTest;