import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Banner,
  BestSeller,
  DealDaily,
  FeatureProducts,
  Product,
  CustomSlider,
} from "../../components";
import { useDispatch, useSelector } from "react-redux";
import icons from "../../ultils/icons";

const { IoIosArrowForward } = icons;
const Home = () => {
  const { newProducts } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.app);

  return (
    <div className="w-main">
      <div className="flex flex-row">
        <div className="flex flex-col gap-5 w-[25%] flex-auto">
          <Sidebar />
          <DealDaily />
        </div>
        <div className="flex flex-col gap-5 pl-5 w-[75%] flex-auto">
          <Banner />
          <BestSeller />
        </div>
      </div>
      <div className="my-8">
        <FeatureProducts />
      </div>
      <div className="my-8 w-full">
        <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main uppercase">
          Featured products
        </h3>
        <div className=" mt4 mx-[-10px] pt-4">
          <CustomSlider products={newProducts} />
        </div>
      </div>
      <div className="my-8 w-full">
        <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main uppercase">
          hot collections
        </h3>
        <div className="flex flex-wrap gap-4 mt-4">
          {categories
            ?.filter((el) => el.brand.length > 0)
            .map((el) => (
              <div key={el?._id} className="w-[396px]">
                <div className="border flex p-4 gap-4 min-h-[202px]">
                  <img
                    className="w-[144px] flex-1 h-[129px] object-cover"
                    src={
                      "https://digital-world-2.myshopify.com/cdn/shop/files/mobile-devices_300x.jpg?v=1613166682"
                    }
                  />
                  <div className="flex-1 text-gray-700">
                    <h4 className="font-semibold uppercase">{el?.title}</h4>
                    <ul className="text-sm">
                      {el?.brand?.map((item) => (
                        <span className="flex gap-1 items-center text-gray-500">
                          <IoIosArrowForward size={14} />
                          <li key={item}>{item}</li>
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="my-8 w-full">
        <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main uppercase">
          blog posts
        </h3>
      </div>
    </div>
  );
};

export default Home;
