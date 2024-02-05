import React, { memo } from 'react'

const ProductExtraInfo = ({icon, title, sub}) => {
  return (
    <div className='flex items-start p-3 gap-4 mb-[10px] border'>
        <span className='p-2 bg-gray-800 text-white rounded-full flex items-center justify-center'>
            {icon}
        </span>
        <div className='flex flex-col text-sm text-gray-500'>
            <span className='font-medium'>{title}</span>
            <span className='text-xs'>{sub}</span>
        </div>
    </div>
  )
}

export default memo(ProductExtraInfo)