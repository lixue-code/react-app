import React, { useContext, useState} from 'react';
import './StudentForm.css'
import FetchContext from "./store/FetchContext";
import useFetch from "./hooks/useFetch";

function StudentForm(props) {
    const [inputData,setInputData] = useState({
        name: props.stu ? props.stu.attributes.name : '',
        age: props.stu ? props.stu.attributes.age : 0,
        gender:props.stu ? props.stu.attributes.gender : '',
        address: props.stu ? props.stu.attributes.address : '',
    })
    const ctx = useContext(FetchContext)
    const onNameChangeHandle = (e)=>{
        setInputData(prevState => ({...prevState,name:e.target.value.trim()}))
    }

    const onAgeChangeHandle = (e)=>{
        setInputData(prevState => ({...prevState,age:+e.target.value}))
    }

    const onGenderChangeHandle = (e)=>{
        setInputData(prevState => ({...prevState,gender:e.target.value.trim()}))
    }

    const onAddressChangeHandle = (e)=>{
        setInputData(prevState => ({...prevState,address:e.target.value.trim()}))
    }

    const {loading,error,fetchData:updateStu} = useFetch({
        url: props.stu ? `students/${props.stu.id}` : 'students',
        method: props.stu ? 'put' : 'post',
    },ctx.fetchData)

    const onAddHandle = ()=>{
        updateStu(inputData)
    }
    const onCancelHandle = ()=>{
        props.cancleEdit()
    }

    const onUpdateHandle = ()=>{
        updateStu(inputData)
    }

    return (
        <>
            <tr className='student-form'>
                <td><input
                    type='text'
                    onChange={onNameChangeHandle}
                    value={inputData.name}/></td>
                <td><input
                    type='text'
                    onChange={onAgeChangeHandle}
                    value={inputData.age}/></td>
                <td>
                    <select onChange={onGenderChangeHandle} value={inputData.gender}>
                        <option value='男'>男</option>
                        <option value='女'>女</option>
                    </select>
                </td>
                <td><input
                    type='text'
                    onChange={onAddressChangeHandle}
                    value={inputData.address}/></td>
                <td>
                    {props.stu && <>
                        <button onClick={onCancelHandle}>取消</button>
                        <button onClick={onUpdateHandle}>确认</button>
                    </>}
                    {!props.stu && <button onClick={onAddHandle}>添加</button>}

                </td>
            </tr>
            {loading && <tr><td colSpan='5'>正在添加</td></tr>}
            {error && <tr><td colSpan='5'>添加失败</td></tr>}
        </>

    );
}

export default StudentForm;