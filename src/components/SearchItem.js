import React, { memo, useEffect, useState } from "react";
import icons from "../ultils/icons";
import { colors } from "../ultils/contants";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import path from "../ultils/path";
import useDebounce from '../hooks/useDebounce'
import { apiGetProducts } from "../apis";

const { AiOutlineDown } = icons;
const SearchItem = ({
  name,
  activeClick,
  handleChangeActiveFilter,
  type = "checkbox",
}) => {
  const navigate = useNavigate();
  const { category } = useParams();
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState({
    from : 0,
    to: 0
  });
  const [bestPrice, setbestPrice] = useState(null);

  const handleSelect = (e) => {
    const alreadyEl = selected.find((el) => el === e.target.value);
    if (alreadyEl)
      setSelected((prev) => prev.filter((el) => el !== e.target.value));
    else setSelected((prev) => [...prev, e.target.value]);
    handleChangeActiveFilter(null);
  };

  useEffect(() => {
    if (selected.length > 0) {
      navigate({
        pathname: `/${category}`,
        search: createSearchParams({
          color: selected.join(","),
        }).toString(),
      });
    } else {
      navigate(`/${category}`);
    }
  }, [selected]);

  const fetchBestPriceProduct = async () => {
    const res = await apiGetProducts({ sort: "-price", limit: 1 });
    if (res.success) setbestPrice(res.productDatas[0]?.price);
  };

  useEffect(() => {
    if (type === "input") {
      fetchBestPriceProduct();
    }
  }, [type]);

  useEffect(()=> {
    if(price.from > price.to) alert("From price cannot be greater than to price.")
  }, [price])

  const debouncePriceFrom = useDebounce(price.from, 500)
  const debouncePriceTo = useDebounce(price.to, 500)
  useEffect(()=> {
    const data ={}
    if(Number(price.from)>0) data.from = price.from
    if(Number(price.to)>0) data.to = price.to
    // if (price.from > 0) {
      navigate({
        pathname: `/${category}`,
        search: createSearchParams(price).toString(),
      });
    // } else {
    //   navigate(`/${category}`);
    // }
  }, [debouncePriceFrom, debouncePriceTo])

  return (
    <div
      onClick={() => handleChangeActiveFilter(name)}
      className="p-3 cursor-pointer text-gray-500 relative gap-6 border border-gray-800 flex justify-between items-center"
    >
      <span className="text-xs capitalize">{name}</span>
      <AiOutlineDown />

      {activeClick === name && (
        <div className="absolute z-10 top-[calc(100%+1px)] left-0 w-fit p-4 border bg-white min-w-[150px]">
          {type === "checkbox" && (
            <div className="">
              <div className="p-4 flex items-center justify-center gap-8">
                <span className="whitespace-nowrap">{`${selected.length} selected`}</span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected([]);
                  }}
                  className="underline hover:text-main"
                >
                  Reset
                </span>
              </div>
              <div className="flex flex-col gap-3 border-t">
                {colors.map((el, index) => (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <input
                      type="checkbox"
                      name={el}
                      className="outline-none"
                      value={el}
                      onClick={handleSelect}
                      id={el}
                      checked={selected.some(
                        (selectedItem) => selectedItem === el
                      )}
                    />
                    <label htmlFor={el}>{el}</label>
                  </div>
                ))}
              </div>
            </div>
          )}
          {type === "input" && (
            <div className="" onClick={(e) => e.stopPropagation()}>
              <div className="p-4 flex items-center justify-center gap-8">
                <span className="whitespace-nowrap">{`The hightest value price ${Number(
                  bestPrice
                ).toLocaleString()} VND`}</span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    setPrice({
                      from: 0,
                      to: 0
                    })
                    handleChangeActiveFilter(null)
                  }}
                  className="underline hover:text-main"
                >
                  Reset
                </span>
              </div>
              <div className="flex items-center p-2 gap-2">
                <div className="flex items-center gap-2">
                  <label htmlFor="form">Form</label>
                  <input type="text" name="" id="from" className="form-input" 
                  value={price.from}
                  onChange={e=> setPrice(prev => ({...prev,from :e.target.value}))}/>
                </div>
                <div className="flex items-center gap-2">
                  <label htmlFor="to">To</label>
                  <input type="text" name="" id="to" className="form-input" 
                  value={price.to}
                  onChange={e=> setPrice(prev => ({...prev,to :e.target.value}))}/>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(SearchItem);
