import React from 'react'
import {renderStarFormatNumber,formatMoney } from '../ultils/helpers'

const ProductCard = ({image, title, totalRatings, price}) => {
  return (
    <div className='w-1/3 flex-auto px-[10px] mb-[20px]'>
        <div className='flex w-full border'>
        <img src={image} alt='product card' className='w-[120px] object-contain p-4'/>
        <div className='flex flex-col mt-[15px] items-start gap-1 w-full text-xs'>

        <span className='line-clamp-1 capitalize text-sm'>{title}</span>
        <span className='flex h-4'>{renderStarFormatNumber(totalRatings)}</span>
            
           <span>{`${formatMoney(price)} VND`}</span>
        </div>
        </div>
    </div>
  )
}

export default ProductCard