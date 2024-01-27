import React from 'react'
import Product from './Product';
import Slider from "react-slick";

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };



const CustomSlider = ({products, active}) => {
  return (
   <Slider {...settings}>
          {products && products?.map(el => (
            <Product
            key={el._id} 
            pid={el._id} 
            productData={el}
            isNew = {active}
            />
          ))}
        </Slider>
  )
}

export default CustomSlider