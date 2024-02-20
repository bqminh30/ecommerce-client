import React, { useCallback, useEffect, useState } from "react";
import { InputField, Button } from "../../components";
import { apiRegister, apiLogin, apiForgotPassword,apiFinalRegister } from "../../apis/user";
import Swal from "sweetalert2";
import { useNavigate, useLocation, Link } from "react-router-dom";
import path from "../../ultils/path";
import { login } from "../../store/user/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { validate } from "../../ultils/helpers";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    mobile: "",
  });
  const [invalidFields, setInvalidFields] = useState([]);
  const [isRegister, setIsRegister] = useState(false); 
  const [isVerifieldEmail, setIsVerifieldEmail] = useState(false); 
  const [token, setToken] = useState(''); 
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const resetPayload = () => {
    setPayload({
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      mobile: "",
    });
  };

  useEffect(()=> {
    resetPayload()
  },[isRegister])
  const handleSubmit = useCallback(async () => {
    const { firstname, lastname, ...data } = payload;
    const invalids = isRegister ? validate(payload, setInvalidFields) : validate(data, setInvalidFields)
    console.log('ad', invalids);
    if(invalids === 1 || invalids ===0){
      if (isRegister) {
        const response = await apiRegister(payload);
        if (response.success) {
          // Swal.fire("Congratulation", response.mess, "success").then(() => {
          //   setIsRegister(false);
          //   resetPayload();
          // });
          setIsVerifieldEmail(true)
        } else {
          Swal.fire(
            response.success ? "Congratulation" : "Opps",
            response.mess,
            response.success ? "success" : "error"
          ).then(() => {
            // setIsRegister(false);
            // resetPayload();
          });
        }
      } else {
        const rs = await apiLogin(data);
        if (rs.sucess) {
          dispatch(
            login({
              isLoggedIn: true,
              token: rs.accessToken,
              userData: rs.userData,
            })
          );
          navigate(`/${path.HOME}`);
        } else {
          Swal.fire(
            rs.sucess ? "Congratulation" : "Opps",
            rs.mess,
            rs.sucess ? "success" : "error"
          ).then(() => {
            // resetPayload()
          });
        }
      }
    }
  }, [payload, isRegister]);
  const [email, setEmail] = useState("");
  const handleForgotPassword = async () => {
    const res = await apiForgotPassword({ email });
    if (res.success) {
      console.log(res);
      toast.success(res.mess);
      //  setIsForgotPassword(false)
    } else {
      toast.info(res.mes);
    }
  };

  const finalRegister =  async() => {
    const response = await apiFinalRegister(token)
    if(response.success){
       Swal.fire("Congratulation", response.mess, "success").then(() => {
            setIsRegister(false);
            resetPayload();
          });
          setIsVerifieldEmail(false)
    }else{
      Swal.fire(
        response.success ? "Congratulation" : "Opps",
        response.mess,
        response.success ? "success" : "error"
      ).then(() => {
        // setIsRegister(false);
        // resetPayload();
      });
    }
  }

  return (
    <div className="w-screen h-screen relative">
    {
      isVerifieldEmail &&
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-overlay z-50
    flex flex-col justify-center items-center">
      <div className="bg-white w-[500px] rounded-md p-8">
        <h4>We sent a code to your email. Pls check your mail and enter code</h4>
        <input type="text" className="p-2 border rounded-md outline-none"
        value={token}
        onChange={(e)=>setToken(e.target.value)}/>

        <button className="px-4 py-2 bg-blue-500
        font-semibold text-white rounded-md ml-4"
        type="button"
        onClick={finalRegister}>
          Submit
        </button>
      </div>
      </div>
    }

      {isForgotPassword && (
        <div className="absolute animate-slide-right top-0 left-0 bottom-0 right-0 bg-white flex flex-col items-center py-8 z-50">
          <div className="flex flex-col gap-4">
            <label htmlFor="email">Enter your email: </label>
            <input
              type="text"
              id="email"
              className="w-[800px] pb-2 border-b outline-none placeholder:text-sm"
              placeholder="Ex: email@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex items-center gap-2 justify-end mt-4 w-full">
              <Button
                name={"Submit"}
                style="bg-blue-500"
                handleOnClick={handleForgotPassword}
              >
                
                </Button>
              <Button
                name={"Back"}
                handleOnClick={() => setIsForgotPassword(false)}
              />
            </div>
          </div>
        </div>
      )}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17sA_a9_uhTivnW3ajvLJPTs7g4fclwfOBA&usqp=CAU"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-0 bottom-0 left-0 right-1/2 items-center justify-center flex">
        <div className="p-8 bg-white rounded-md min-w-[500px] flex flex-col items-center">
          <h1 className="text-[28px] font-semibold text-main mb-8">
            {isRegister ? " Register" : "Login"}
          </h1>
          {isRegister && (
            <div className="flex items-center gap-2 w-full">
              <InputField
                value={payload.firstname}
                setValue={setPayload}
                nameKey={"firstname"}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
              />

              <InputField
                value={payload.lastname}
                setValue={setPayload}
                nameKey={"lastname"}
                invalidFields={invalidFields}
                setInvalidFields={setInvalidFields}
              />
            </div>
          )}
          {isRegister && (
            <InputField
              value={payload.mobile}
              setValue={setPayload}
              nameKey={"mobile"}
              // invalidFields={invalidFields}
              // setInvalidFields={setInvalidFields}
            />
          )}
          <InputField
            value={payload.email}
            setValue={setPayload}
            nameKey={"email"}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
          />
          <InputField
            value={payload.password}
            setValue={setPayload}
            nameKey={"password"}
            type={"password"}
            invalidFields={invalidFields}
            setInvalidFields={setInvalidFields}
          />
          <Button
            
            handleOnClick={handleSubmit}
            fw={"w-full"}
          >
            {isRegister ? "Register" : "Login"}
            </Button>
          <div className="flex items-center justify-between my-2 w-full text-sm">
            {!isRegister && (
              <span
                onClick={() => setIsForgotPassword(true)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Forgot your account
              </span>
            )}
            {!isRegister ? (
              <span
                className="text-blue-500 hover:underline cursor-pointer"
                onClick={() => setIsRegister(!isRegister)}
              >
                Create account
              </span>
            ) : (
              <span
                className="text-blue-500 hover:underline cursor-pointer text-right"
                onClick={() => setIsRegister(!isRegister)}
              >
                Go Login{" "}
              </span>
            )}
          </div>
          <Link
          className="text-blue-500 hover:underline text-sm cursor-pointer"
          to={`/${path.HOME}`}>Go Home?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
