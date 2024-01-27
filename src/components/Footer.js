import React, {memo} from 'react'
import icons from '../ultils/icons'

const {MdEmail} = icons
const Footer = () => {
  return (
    <div className='w-full'>
        <div className='h-[103px] w-full bg-main flex items-center justify-center'>
            <div className='w-main flex items-center justify-center'>
                <div className='flex flex-col flex-1'>
                    <span className='text-[20px] text-gray-100'>SIGN UP TO NEWSLETTER</span>
                    <small className='text-[13px] text-gray-300'>Subscribe now and receive weekly newsletter</small>
                </div>
                <div className='flex-1 flex items-center'>
                    <input 
                    className='p-4 pr-0 rounded-1-full w-full bg-[#F04646] outline-none text-gray-50
                    placeholder:text-sm placeholder:text-gray-200 placeholder:italic placeholder:opcity-50'
                    type='text'
                    placeholder='Email address'
                    />
                </div>
                <div className='h-[56px] w-[56px] bg-[#F04646] rounded-r-full justify-center flex items-center'>
                    <MdEmail size={18} color='white'/>
                </div>
            </div>
        </div>
        <div className='h[407px] w-ful bg-gray-800 flex items-center justify-center text-white text-[13px] py-7'>
            <div className='w-main flex '>
                <div className='flex-2 flex flex-col'>
                    <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>ABOUT US</h3>
                    <span>
                        <span>Address: </span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span>Address: </span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span>Address: </span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                </div>
                <div className='flex-1 flex flex-col'>
                    <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>INFORMATION</h3>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                </div>
                <div className='flex-1 flex flex-col'>
                    <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>INFORMATION</h3>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                </div>
                <div className='flex-1 flex flex-col'>
                    <h3 className='mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]'>INFORMATION</h3>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                    <span>
                        <span className='opacity-70'>474 Ontario St Toronto, ON M4X 1M7 Canada</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Footer)