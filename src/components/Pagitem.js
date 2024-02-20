// import {clsx} from 'clsx'
import React from 'react'

const Pagitem = ({children}) => {
  return (
    <div
    className={`w-10 h-10  cursor-pointer flex 
    justify-center hover:rounded-full
   hover:bg-gray-300 items-center`
    }
    >{children}</div>
  )
}

export default Pagitem