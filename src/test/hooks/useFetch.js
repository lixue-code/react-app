import  {useCallback, useState} from 'react';

/**
 * 自定义钩子也是一个普通函数
 * @returns {JSX.Element}
 * @constructor
 * reqObj:请求参数
 * {
 *     url:请求地址
 *     method:请求方法
 *     contentType:请求头参数类型
 *     body:请求参数
 * }
 * cb:回调函数
 */
export default function useFetch(reqObj,cb) {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')

    //useCallBack()防止函数重复创建
    //此时的body应该作为入参传进来
    const fetchData = useCallback(async (body)=>{
        setLoading(true)
        setError(null)
        try{
            //await用于promise对象前
            const res = await fetch('http://localhost:1337/api/'+reqObj.url,{
                method: reqObj.method || 'get',
                headers:{
                    'Content-type': reqObj.contentType || 'application/json'
                },
                body: body ? JSON.stringify({data:body}) : null
            })
            if(res.ok){
                const data = await res.json()
                setData(data.data)
                cb && cb()
            }else{
                throw new Error('数据加载异常')
            }
        }catch (e){
            console.log(e);
            setError(e)
        }finally {
            setLoading(false)
        }
    },[cb,reqObj])


    //设置返回值
    return {
        data,
        loading,
        error,
        fetchData
    }
}
