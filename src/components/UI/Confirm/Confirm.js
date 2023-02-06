import React from 'react'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Confirm.module.css'

export default function Confirm(props) {
  return (
      <BackDrop className={classes.ConfirmBackDrop}>
        <div className={classes.ConfirmBox}>
            <p className={classes.ConfirmText}>{props.ConfirmText}</p>
            <div>
                <button className={classes.CancelBtn} onClick={(e)=>{props.onCancel(e)}}>取消</button>
                <button className={classes.OkBtn} onClick={()=>{props.onOk()}}>确认</button>
            </div>
        </div>
      </BackDrop>
  )
}
