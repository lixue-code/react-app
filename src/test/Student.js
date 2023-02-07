import React, {useContext, useState} from 'react';
import FetchContext from "./store/FetchContext";
import StudentForm from "./StudentForm";
import useFetch from "./hooks/useFetch";

function Student(props) {
    const [isEdit,setIsEdit] = useState(false)
    const ctx = useContext(FetchContext)
    const {loading,error,fetchData:deleteStu} = useFetch({
        url:`students/${props.stu.id}`,
        method:'delete',
    },ctx.fetchData)
    const deleteHandle = ()=>{
        //删除学生
        deleteStu()
    }
    const onEditHandle = ()=>{
        setIsEdit(true )
    }
    const cancelEdit = ()=>{
        setIsEdit(false)
    }

    return (
        <>
            {!isEdit &&
                <tr>
                    <td>{props.stu.attributes.name}</td>
                    <td>{props.stu.attributes.age}</td>
                    <td>{props.stu.attributes.gender}</td>
                    <td>{props.stu.attributes.address}</td>
                    <td>
                        <button onClick={deleteHandle}>删除</button>
                        <button onClick={onEditHandle}>修改</button>
                    </td>
                </tr>
            }
            {isEdit && <StudentForm stu={props.stu} cancleEdit={cancelEdit}/>}
            {loading && <tr><td colSpan='5'>数据正在删除</td></tr>}
            {error && <tr><td colSpan='5'>{error.toString()}</td></tr>}
        </>
    );
}

export default Student;