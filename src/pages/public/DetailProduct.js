import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { apiGetProduct } from '../../apis'
import { BreadCrumb } from '../../components'

const DetailProduct = () => {
    const {pid, title, category} = useParams()
    const [product, setProduct] = useState();
  const resData = async (pid) => {
    const res = await apiGetProduct(pid)
    if(res.success) setProduct(res?.productData)
  }
    useEffect(()=> {
      if(pid) resData(pid)
  }, [pid])

  return (
    <div className='w-full'>
      <div className='h-[81px] flex justify-center items-center bg-gray-100'>
        <div className='w-main'>
          <h3>{title}</h3>
          <BreadCrumb title={title } category={category}/>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct