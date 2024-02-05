import React, { memo, useState } from "react";
import { productInfoTabs } from "../ultils/contants";
import Votebar from "./Votebar";
import { renderStarFormatNumber } from "../ultils/helpers";
import { apiRatings } from "../apis";
import Button from "./Button";

const ProductInfomation = ({ totalRatings, totalCount }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div>
      <div className="flex items-center gap-2 relative bottom-[-1px]">
        {productInfoTabs.map((el) => (
          <span
            className={`py-2 px-4 cursor-pointer
                    ${
                      activeTab === el.id
                        ? "bg-white border border-b-0"
                        : "bg-gray-200"
                    }`}
            onClick={() => setActiveTab(el.id)}
            key={el.id}
          >
            {el.name}
          </span>
        ))}
        <span
          className={`py-2 px-4 cursor-pointer
                    ${
                      activeTab === 5
                        ? "bg-white border border-b-0"
                        : "bg-gray-200"
                    }`}
          onClick={() => setActiveTab(5)}
        >
          CUSTOMER
        </span>
      </div>
      <div className="w-full border p-4">
        {productInfoTabs.some((el) => el.id === activeTab) &&
          productInfoTabs.find((el) => el.id === activeTab)?.content}
        {activeTab === 5 && (
          <>
            <div className="flex p-4">
              <div className="flex-4 border flex flex-col items-center justify-center ">
                <span className="font-semibold text-3xl">{`${totalRatings}/5`}</span>
                <span className="flex items-center gap-1">
                  {renderStarFormatNumber(totalRatings)?.map((el, index) => (
                    <span key={index}>{el}</span>
                  ))}
                </span>
                <span className="text-sm">{`${totalCount} reviews`}</span>
              </div>
              <div className="flex-6 flex gap-2 flex-col p-4">
                {Array.from(Array(5).keys())
                  .reverse()
                  .map((el) => (
                    <Votebar
                      key={el}
                      ratingCount={2}
                      ratingTotal={5}
                      number={+el + 1}
                    />
                  ))}
              </div>
            </div>
            <div>
              <span>Do you review this product</span>
              <Button>Vote Now!</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(ProductInfomation);
