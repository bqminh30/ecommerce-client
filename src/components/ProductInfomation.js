import React, { memo, useCallback, useState } from "react";
import { productInfoTabs } from "../ultils/contants";
import Votebar from "./Votebar";
import { renderStarFormatNumber } from "../ultils/helpers";
import { apiRatings } from "../apis";
import Button from "./Button";
import {useDispatch, useSelector} from 'react-redux'
import { showModal } from "../store/app/appSlice";
import VoteOption from "./VoteOption";
import Swal from 'sweetalert2'
import path from "../ultils/path";
import {useNavigate} from 'react-router-dom'
import Comment from "./Comment";


const ProductInfomation = ({ totalRatings, ratings, nameProduct, pid,rerender }) => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState(1);
  const {isLoggedIn} =useSelector(state=> state.user)
  const navigate = useNavigate()

  const handleSubmitVoteOption = async ({comment, chooseScore}) => {
    if(!comment || !chooseScore || !pid){
      alert('Please vote when click submit')
      return
    }
    await apiRatings({star: chooseScore, comment, pid, updatedAt: Date.now()})
    rerender()
    // if(res.success) {
      dispatch(showModal({isShowModal: false,
        modalChildren: null
      }))
      

    // }
  }

  const handleVoteNow = () => {
    if(!isLoggedIn){
      Swal.fire({
        text: "Login to vote",
        cancelButtonText: "Cancel",
        showCancelButton: true,

        confirmButtonText:"Go login",
        title:"Opps"
      }).then((rs) => {
        if(rs.isConfirmed) navigate(`/${path.LOGIN}`)
      })
    }else {
      dispatch(showModal({isShowModal: true, modalChildren: <VoteOption
        handleSubmitVoteOption={handleSubmitVoteOption}
        nameProduct={nameProduct}/>}))
    }
  }

  return (
    <div className="">
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
        
      </div>
      <div>
  <>
    <div className="flex flex-col p-4">
     <div className="flex">
     <div className="flex-4 border flex flex-col items-center justify-center ">
        <span className="font-semibold text-3xl">{`${totalRatings}/5`}</span>
        <span className="flex items-center gap-1">
          {renderStarFormatNumber(totalRatings)?.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
        </span>
        <span className="text-sm">{`${ratings.length} reviews`}</span>
      </div>
      <div className="flex-6 flex gap-2 flex-col p-4">
        {Array.from(Array(5).keys())
          .reverse()
          .map((el) => (
            <Votebar
              key={el}
              ratingCount={ratings.filter(i => i.star === el+1)?.length}
              ratingTotal={ratings.length}
              number={+el + 1}
            />
          ))}
      </div>
     </div>
      <div className="p-4 flex items-center justify-center text-sm flex-col gap-2">
      <span>Do you review this product</span>
      <Button handleOnClick={handleVoteNow}>Vote Now!</Button>
    </div>
    <div className="flex flex-col gap-4">
      {
        ratings?.map(el => (
          <Comment 
          key={el._id}
          star={el?.star}
          updatedAt={el?.updatedAt}
          comment={el?.comment}
          name={`${el.postedBy?.lastname} ${el.postedBy?.firstname}`}
          />
        ))
      }
    </div>
    </div>
   
  </>

        </div>
    </div>
  );
};

export default memo(ProductInfomation);
