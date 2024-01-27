import React, {memo, useEffect} from 'react'
import { Link } from 'react-router-dom'
import path from '../ultils/path'
import { getCurrent } from '../store/user/asyncAction'
import {useDispatch, useSelector} from 'react-redux'
import icons from '../ultils/icons'
import { logout } from '../store/user/userSlice'

const {AiOutlineLogout} = icons;
const TopHeader = () => {
  const dispatch = useDispatch()
  const {isLoggedIn,current} = useSelector(state=> state.user)
  useEffect(()=> {
    if(isLoggedIn) dispatch(getCurrent())
  },[dispatch])
  return (
    <div className='h-[38px] w-full bg-main flex items-center justify-center'>
        <div className='w-main flex items-center text-xs text-white justify-between'>
            <span>ORDER ONLINE OR CALL US (+1800) 000 8808</span>
            {
              isLoggedIn ?
              <div className='flex gap-2 text-sm items-center'>
                <small>{`Welcome, ${current?.lastname} ${current?.firstname}`}</small>
             <span
             onClick={()=> dispatch(logout())}
             className='hover:rounded-full hover:bg-gray-200 p-2 hover:text-main cursor-pointer'>
             <AiOutlineLogout size={18}/>
             </span>
              </div>
              :
              <Link to={`/${path.LOGIN}`} >
Sign In or Create Account</Link>
            }
        </div>
    </div>
  )
}

export default memo(TopHeader)