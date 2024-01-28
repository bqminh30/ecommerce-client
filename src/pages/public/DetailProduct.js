import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { apiGetProduct } from '../../apis'
import { BreadCrumb } from '../../components'
import Slider from "react-slick";
import ReactImageMagify from 'react-image-magnify'
import { formatMoney, formatPrice, renderStarFormatNumber } from '../../ultils/helpers';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};


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
          <h3 className='font-bold'>{title}</h3>
          <BreadCrumb title={title } category={category}/>
        </div>
      </div>
      <div className='w-main m-auto mt-4 flex'>
          <div className='flex flex-col gap-4 w-2/5'>
            <div className='h-[458px] w-[458px]'>
            <ReactImageMagify {...{
              smallImage: {
                alt: "asdf",
                isFluidWidth: true,
                src: product?.thumb
              },
              largeImage: {
                src: product?.thumb,
                width: 1200,
                height: 1500
              }
            }} />
            </div>
            {/* <img src={product?.images} alt='product' className='h-[458px] w-[458px] object-cover' /> */}
            <div className='w-[458px]'>
              <Slider className="image-slider flex gap-2 justify-between" {...settings}>
                {
                  product?.images.map(el => (
                    <div className='flex-1' key={el}>
                      <img src={el} alt='sub-product' className=' h-[143px] w-[143px] object-cover'/>
                  
                    </div>
                    ))
                }
              </Slider>
            </div>
          </div>
          <div className='w-2/5'>
            <h2 className='text-[30px] font-semibold'>
              {`${formatMoney(formatPrice(product?.price))} VND`}
            </h2>
            <div className='flex items-center mt-4'>
              {
                renderStarFormatNumber(product.totalRatings)?.map(el => (
                  <span key={el}>{el}</span>
                ))
              }
            </div>
          </div>
          <div className='w-1/5'></div>
      </div>

    </div>
  )
}

export default DetailProduct