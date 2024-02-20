import React from 'react'
import avatar from '../assets/anhminh.jpg'
import moment, { now } from 'moment'
import {renderStarFormatNumber} from '../ultils/helpers'


const Comment = ({image= avatar,name='Anonymous', updatedAt = new Date(), comment='', star=0}) => {
  return (
    <div className='flex gap-4'>
      <div className='flex-none'>
        <img src={image} alt='avatar' className='w-[40px] h-[40px] object-contain rounded-full' />
      </div>
      <div className='flex flex-col flex-auto'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold'>{name}</h3>
          <span className='text-xs italic'>{moment(updatedAt).fromNow()}</span>
        </div>
        <div className='flex flex-col gap-2 pl-4 text-sm mt-2 border border-gray-200 py-2 bg-gray-100'>
         <span className='flex items-center gap-1'>
         <span className='font-semibold'>Vote: </span>
          <span className="flex items-center gap-1 pl-4">
                  {renderStarFormatNumber(star)?.map((el, index) => (
                    <span key={index}>{el}</span>
                  ))}
                </span>
         </span>
         <span className='flex gap-1'>
         <span className='font-semibold'>Comment: </span>
          <span className="flex items-center gap-1">
                 {comment}
                </span>
         </span>
        </div>
      </div>
    </div>
  )
}

export default Comment