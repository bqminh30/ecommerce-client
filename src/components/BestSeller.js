import React, { useEffect, useState } from "react";
import { apiGetProducts } from "../apis/product";
import {CustomSlider, Product} from './'
import {useDispatch,useSelector} from 'react-redux'
import { getNewProducts } from "../store/products/asyncAction";
// import {useSelector}

const tabs= [
    {
        id: 1,
        name: 'best seller'
    },
    {
        id: 2,
        name: 'new arrivals'
    }
]


const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState(null);
  // const [newProducts, setNewProducts] = useState(null);
  const [active, setActive] = useState(1);
  const [products, setProducts] = useState(null)
  const dispatch = useDispatch()
  const {newProducts} = useSelector(state => state.product)
  const fetchProducts = async () => {
    const [bestSell, newProd] = await Promise.all([
      apiGetProducts({ sort: "-sold" }),
      apiGetProducts({ sort: "-createdAt" }),
    ]);
    if (bestSell.success) {
      setBestSeller(bestSell.productDatas);
      setProducts(bestSell.productDatas)
    }
    
  };
  useEffect(() => {
    fetchProducts();
    dispatch(getNewProducts())
  }, []);

  useEffect(()=> {
    if(active ===1) setProducts(bestSeller)
    if(active ===2) setProducts(newProducts)
  },[active])

  return <div>
    <div className="flex text-[20px] pb-4  ml-[-32px]">
        {
            tabs.map(el => (
                <span key={el.id}
                onClick={()=>setActive(el.id)}
                className={`font-semibold capitalize px-8 cursor-pointer border-r text-gray-400 ${active === el.id ? 'text-main' :''}`}>{el.name}</span>
            ))
        }
       
    </div>
    <div className="mt-4 mx-[-10px] border-t-2 border-main pt-4">
    <CustomSlider products ={newProducts} active={active} />
    </div>
    <div className="w-full flex gap-4 mt-8">
      <img className="flex-1 object-contain" src={"https://digital-world-2.myshopify.com/cdn/shop/files/banner2-home2_2000x_crop_center.png?v=1613166657"} alt="banner" />
      <img className="flex-1 object-contain" src={"https://digital-world-2.myshopify.com/cdn/shop/files/banner1-home2_2000x_crop_center.png?v=1613166657"} alt="banner" />
    </div>
  </div>;
};

export default BestSeller;
