import React, { memo, useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { voteOptions } from "../ultils/contants";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";

const VoteOption = ({ nameProduct, handleSubmitVoteOption }) => {
  const modalRef = useRef();
  const [chooseScore, setChooseScore] = useState(null);
  const [comment, setComment] = useState(null);
  useEffect(() => {
    modalRef.current.scrollIntoView({ block: "center", behavior: "smooth" });
  }, []);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={modalRef}
      className="bg-white w-[700px] p-4 flex-col gap-4 flex items-center justify-center"
    >
      <img src={logo} alt="logo" className="w-[300px] my-8 object-contain" />
      <h2 className="text-center text-medium text-lg">{`Voting product ${nameProduct}`}</h2>
      <textarea
        className="font-textarea w-full placeholder:italic placeholder:text-xs placeholder:text-gray-500 text-sm"
        placeholder="Type something"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <div className="w-full flex flex-col gap-4">
        <p>How do you like this product?</p>
        <div className="flex  items-center justify-center gap-4">
          {voteOptions.toReversed().map((el) => (
            <div
              className="w-[100px] h-[100px] bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-md
              p-4 flex items-center justify-center flex-col gap-2"
              key={el.id}
              onClick={() => setChooseScore(el.id)}
            >
              {Number(chooseScore) && chooseScore >= el.id ? (
                <AiFillStar color="orange" />
              ) : (
                <AiFillStar color="gray" />
              )}
              <span>{el.text}</span>
            </div>
          ))}
        </div>
      </div>
      <Button
        handleOnClick={() => handleSubmitVoteOption({ comment, chooseScore })}
        fw
      >
        Submit
      </Button>
    </div>
  );
};

export default memo(VoteOption);
