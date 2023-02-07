import React from 'react';
import Student from "./Student";
import classes from "./StudentList.module.css";
import StudentForm from "./StudentForm";

function StudentList(props) {
    return (
       <table className={classes.Table}>
           <caption>学生列表</caption>
           <thead>
                <tr>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>地址</th>
                    <th>操作</th>
                </tr>
           </thead>

           <tbody>
           {props.stus.map(item => <Student key={item.id} stu={item}></Student>)}
           </tbody>

           <tfoot>
                <StudentForm></StudentForm>
           </tfoot>
       </table>
    );
}

export default StudentList;