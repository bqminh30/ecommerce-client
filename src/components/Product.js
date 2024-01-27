import React, {useState} from 'react'
import {formatMoney} from '../ultils/helpers'
import label from '../assets/label.webp'
import  {renderStarFormatNumber} from '../ultils/helpers'
import {SelectOption} from'./'
import icons from '../ultils/icons';
import { Link } from 'react-router-dom'
import path from '../ultils/path'

const { BsFillSuitHeartFill,
  AiFillEye,
  AiOutlineMenu} = icons;

const Product = ({productData, isNew, pid}) => {
  const [isShowOption, setIsShowOption] = useState(false)
  return (
    <div className='w-full text-base px-[10px]'>
       <Link
       to={`/${path.DETAIL_PRODUCT}/${productData._id}/${productData.title}`}
       className="w-full border p-[15px] flex flex-col items-center"
       onMouseEnter={e => {
        setIsShowOption(true)
        e.preventDefault()
       }}
       onMouseLeave={e => {
        setIsShowOption(false)
        e.preventDefault()
       }}
       >
    <div className="w-full relative">
      {isShowOption && <div className='absolute bottom-[-10px] left-0 right-0 flex justify-center gap-2 animate-slide-top'>
       <SelectOption icon={<AiFillEye />}/>
       <SelectOption icon={<AiOutlineMenu />}/>
       <SelectOption icon={<BsFillSuitHeartFill />}/>
      </div>}
       <img src={productData?.thumb || ''} alt={productData.thumb}
        className='w-[274px] h-[274px] object-cover'
        />
        <img src={label} alt="label" className="absolute top-[-18px] left-[-25px] w-[75px] h-[35px] object-cover"/>
        <span className="font-bold top-[-15px] left-0 text-white absolute">{isNew === 1? 'New' :'Trending'}</span>
        </div>
        <div className='flex flex-col mt-[15px] items-start gap-1 w-full '>
        <span className='flex h-4'>{renderStarFormatNumber(productData?.totalRatings)}</span>
            
            <span className='line-clamp-1'>{productData?.title}</span>
           <span>{`${formatMoney(productData?.price)} VND`}</span>
        </div>
       </Link>
    </div>
  )
}

export default Product