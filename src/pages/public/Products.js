import React, { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate ,createSearchParams} from "react-router-dom";
import { BreadCrumb, InputSelect, Product, SearchItem } from "../../components";
import { apiGetProducts } from "../../apis";
import Masonry from "react-masonry-css";
import { sorts } from "../../ultils/contants";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Products = () => {
  const navigate = useNavigate()
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('');
  const [activeClick, setActiveClick] = useState(null);
  const [params] = useSearchParams();

  const fetchProductByCategory = async (queris) => {
    const res = await apiGetProducts(queris);
    if (res.success) setProducts(res.productDatas);
  };

  useEffect(() => {
    let param = []
    for(let i of params.entries()) param.push(i)
    const queries ={};
    for(let i of params) queries[i[0]] =i[1]

  
    let priceQuery ={};
    if(queries.to && queries.from){
      priceQuery = {
        $and: [
          {price: {gte: queries.from}},
          {price: {lte: queries.to}},
        ]
      }  
      delete queries.price
    }
      if(queries.from){
        queries.price = {gte: queries.from.price}
       
      }
      if(queries.to){
        queries.price = {lte: queries.to.price}
        // delete queries.to
      }

      delete queries.from
      delete queries.to

      const q ={...priceQuery,...queries}

    fetchProductByCategory(q);
  }, [params]);

  const handleChangeActiveFilter = useCallback((name)=> {
    if(activeClick===name) setActiveClick(null)
    else setActiveClick(name)
  },[])

  const changeValue = useCallback((value)=> {
    setSort(value)
  },[sort])

  useEffect(()=> {
    navigate({
      pathname: `/${category}`,
      search: createSearchParams({sort}).toString(),
    });
  },[sort])

  return (
    <div className="w-full">
      <div className="h-[81px] flex justify-center items-center bg-gray-100">
        <div className="w-main">
          <h3 className="font-semibold uppercase">{category}</h3>
          <BreadCrumb category={category} />
        </div>
      </div>
      <div className="w-main border p-4 mt-8 m-auto flex justify-between">
        <div className="w-4/5 flex-auto flex flex-col">
          <span className="font-semibold text-sm gap-3">Filter by</span>
          <div className="flex items-center gap-4">
          <SearchItem 
          name={"Price"}
          type="input"
          activeClick={activeClick}
          handleChangeActiveFilter={handleChangeActiveFilter}
          /> 
          <SearchItem 
          name={"Color"}
          activeClick={activeClick}
          handleChangeActiveFilter={handleChangeActiveFilter}
          /> 
          </div>
         
         </div>
        <div className="w-1/5 flex-auto flex flex-col">
        <span className="font-semibold text-sm gap-3">Sort By</span>
    <div className="w-full">
      <InputSelect 
        value={sort}
        options={sorts}
        changeValue={changeValue}
      />
    </div>
         </div>
      </div>
      <div className="mt-8 w-main m-auto">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex flex-wrap mx-[-10px]"
          columnClassName="my-masonry-grid_column"
        >
          {/* array of JSX items */}
          {products.map((el) => (
            <Product
              key={el._id}
              pid={el._id}
              productData={el}
              // isNew={active}
              // normal={normal}
            />
          ))}
        </Masonry>
      </div>
      <div className="w-full h-[500px]"></div>
    </div>
  );
};

export default Products;
