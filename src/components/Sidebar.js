import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import {createSlug} from '../ultils/helpers'
import {useSelector} from 'react-redux'

const Sidebar = () => {
  const {categories} = useSelector(state => state.app)
  return (
    <div className='flex flex-col border'>
      {
        categories?.map((el) => (
          <NavLink
          className={({isActive})=> 
          isActive ? 'bg-main text-white px-5 pt-[15px] pb[14px] text-sm hover:text-main' : 
          'px-5 pt-[15px] pb[14px] text-sm hover:text-main'}
          to={createSlug(el.title)}
          key={el._id}>
            {el.title}
          </NavLink>
        ))
      }
    </div>
  )
}

export default Sidebar