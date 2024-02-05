import React, { useCallback, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { apiGetProduct } from '../../apis'
import { BreadCrumb, Button, ProductExtraInfo, ProductInfomation, SelectQuantity } from '../../components'
import Slider from "react-slick";
import ReactImageMagify from 'react-image-magnify'
import { formatMoney, formatPrice, renderStarFormatNumber } from '../../ultils/helpers';
import { productExtraInformation } from '../../ultils/contants';

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
    const [currentImage, setCurrentImage] = useState(null);
    const [quantity, setQuantity] = useState(1);
  const resData = async (pid) => {
    const res = await apiGetProduct(pid)
    if(res.success) {
      setProduct(res?.productData)
      setCurrentImage(res?.productData?.thumb)
    }
  }
    useEffect(()=> {
      if(pid) resData(pid)
  }, [pid])

  const handleQuantity = useCallback((number)=> {
    if(Number(number) || Number(number) <1){
      return
    }else {

      setQuantity(number)
    }
  },[quantity])

    const handleChangeQuantity = useCallback((flag)=> {
      if(flag === 'minus' && quantity ===1) return;
      if(flag === 'minus') setQuantity(prev => +prev -1)
      if(flag === 'plus') setQuantity(prev => +prev +1)
    },[quantity])

    const handleClickImage = (e, el) => {
      e.stopPropagation()
      setCurrentImage(el)
    }
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
                src: currentImage
              },
              largeImage: {
                src: currentImage,
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
                    <div

                    className='flex-1' key={el}>
                      <img
                      onClick={e=> handleClickImage(e, el)}
                      src={el} alt='sub-product' className='cursor-pointer border w-[143px] h-[143px] object-cover'/>
                  
                    </div>
                    ))
                }
              </Slider>
            </div>
          </div>
          <div className='w-2/5 pr-[24px] flex flex-col gap-4'>
           <div className='flex items-center justify-between'>
           <h2 className='text-[30px] font-semibold'>
              {`${formatMoney(formatPrice(product?.price))} VND`}
            </h2>
            <span className='text-sm text-main'>{`Kho: ${product?.quantity}`}</span>
           </div>
            <div className='flex items-center mt-2 gap-1'>
              {
                renderStarFormatNumber(product?.totalRatings)?.map(el => (
                  <span key={el}>{el}</span>
                ))
              }
              <span className='text-sm text-main italic'>{`Da ban: ${product?.sold} cai`}</span>
          
            </div>
            <div className='list-square text-sm text-gray-500 pl-4'>
              {
                product?.description?.map(el =>(
                  <li className='leading-6' key={el}>{el}</li>
                ))
              }
              <div className='flex flex-col gap-8'>
                <SelectQuantity quantity={quantity} 
                handleChangeQuantity={handleChangeQuantity}
                handleQuantity={handleQuantity}/>
                <Button fw>
                Add to Cart
                </Button>
              </div>
            </div>
          </div>
          <div className='w-1/5'>
            {
              productExtraInformation?.map(el=> (
                <ProductExtraInfo
                key={el.id}
                icon={el.icon}
                sub={el.sub}
                title={el.title}
                />
              ))
            }
          </div>
      </div>
      <div className='w-main m-auto mt-8'>
            <ProductInfomation 
            totalRatings={product?.totalRatings }
            totalCount={18}/>
      </div>

      <div className='height-[500px] w-main'></div>

    </div>
  )
}

export default DetailProduct