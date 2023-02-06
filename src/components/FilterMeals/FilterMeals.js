import React, {useEffect, useState} from 'react'
import classes from './FilterMeals.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function FilterMeals(props) {
  //修改成受控组件
  const [keyword,setKeyword] = useState('')

  useEffect(() => {
      //降低数据过滤的次数，提高用户体验
      //希望等用户输入完了再查询
      const timer = setTimeout(() => {
          props.onSearch(keyword)
      },1000)
      /**
       * effect中指定一个函数作为返回值
       * 这个函数可以称为清理函数，会在下次effect执行前调用
       * 可以在这个函数中清除上次effect带来的影响
       */
      return ()=>{
            clearTimeout(timer)
      }
  },[props,keyword])

  const onSearchHandle = (e)=>{
        setKeyword(e.target.value.trim())
        // props.onSearch(keyword)
  }
  return (
    <div className={classes.FilterMeals}>
        <div className={classes.inputOuter}>
            <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon}></FontAwesomeIcon>
            <input type="text" value={keyword} placeholder='请输入关键字' className={classes.SearchInput} onChange={onSearchHandle}></input>
        </div>
    </div>
  )
}
