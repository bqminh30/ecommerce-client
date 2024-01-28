import {Route, Routes} from 'react-router-dom'
import  {Login, Home, Public, FAQs, Service, Blog, Products,FinalRegister, DetailProduct, ResetPassword} from './pages/public'
import path from './ultils/path';
import {getCategories} from './store/app/asyncAction'
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(getCategories())
  },[])
  return (
    <div className='min-h-screen overflow-y-auto font-main'>
      <Routes>
        <Route path={path.PUBLIC} element={<Public/>}>
          <Route path={path.HOME} element={<Home/>} />
         
          <Route path={path.FAQs} element={<FAQs/>} />
          <Route path={path.OURSERVICES} element={<Service/>} />
          <Route path={path.BLOGS} element={<Blog/>} />
          <Route path={path.PRODUCTS} element={<Products/>} />
          <Route path={path.DETAIL_PRODUCT_CATEGORY_PID_TITLE} element={<DetailProduct/>} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword/>} />
        </Route>
        <Route path={path.LOGIN} element={<Login/>} /> 

        <Route path={path.FINAL_REGISTER} element={<FinalRegister/>} />
      </Routes>

      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
{/* Same as */}
<ToastContainer />
    </div>
  );
}

export default App;
