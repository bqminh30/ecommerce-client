import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { apiGetProduct } from '../../apis'

const DetailProduct = () => {
    const {pid, title} = useParams()
  const resData = async (pid) => {
    const res = await apiGetProduct(pid)
  }
    useEffect(()=> {
      if(pid) resData(pid)
  }, [pid])

  return (
    <div className='w-full'>
      <div className='h-[81px] flex justify-center items-center bg-gray-100'>
        <div className='w-main'>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct