import React from 'react'
import classes from './FilterMeals.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function FilterMeals(props) {

  const onSearchHandle = (e)=>{
        const keyword = e.target.value.trim()
        props.onSearch(keyword)
  }
  return (
    <div className={classes.FilterMeals}>
        <div className={classes.inputOuter}>
            <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon}></FontAwesomeIcon>
            <input type="text" placeholder='请输入关键字' className={classes.SearchInput} onChange={onSearchHandle}></input>
        </div>
    </div>
  )
}
