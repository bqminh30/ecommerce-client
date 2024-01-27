import React, { useEffect, useState } from 'react'
import {Product, ProductCard} from './'
import {apiGetProducts} from '../apis/product'

const FeatureProducts = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        const response = await apiGetProducts({limit: 9, page: Math.round(Math.random() * 6)})
        if(response.success) setProducts(response.productDatas)
    }

    useEffect(()=> {
        fetchProducts()
    },[])


  return (
    <div className='w-full'>
        <h3 className='text-[20px] font-semibold py-[15px] border-b-2 border-main uppercase'>Featured products</h3>
        <div className='flex flex-wrap mt-[15px] mx-[-20px]'>
            {
                products?.map(el => (
                    <ProductCard 
                    key={el._id} 
                    image={el.thumb}
                    title={el.title}
                    totalRatings={el.totalRatings}
                    price={el.price}
                    />
                ))
            }
        </div>
        <div className='flex justify-between '>
            <img src='https://digital-world-2.myshopify.com/cdn/shop/files/banner1-bottom-home2_b96bc752-67d4-45a5-ac32-49dc691b1958_600x.jpg?v=1613166661' alt=''
                className='w-[49%] object-contain'
            />
            <div className='flex flex-col justify-between gap-4 w-[24%]'>

            <img src='https://digital-world-2.myshopify.com/cdn/shop/files/banner2-bottom-home2_400x.jpg?v=1613166661' alt='' />
            <img src="https://digital-world-2.myshopify.com/cdn/shop/files/banner3-bottom-home2_400x.jpg?v=1613166661" alt='' />
            </div>
            <img className='w-[24%] object-contain' src ="https://digital-world-2.myshopify.com/cdn/shop/files/banner4-bottom-home2_92e12df0-500c-4897-882a-7d061bb417fd_400x.jpg?v=1613166661" alt/>
        </div>
    </div>
  )
}

export default FeatureProducts