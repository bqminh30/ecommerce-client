import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { Button } from '../../components'
import { apiResetPassword } from '../../apis'

import {toast} from 'react-toastify'

const ResetPassword = () => {

  const [password, setPassword] = useState("")
  const {token} = useParams();
  const handleResetPassword = async() => {
    const res = await apiResetPassword({password, token})
    if(res.success) {
        console.log(res);
        toast.success(res.mess)
      //  setIsForgotPassword(false)
      }else {
        toast.info(res.mes)
      }
  }
  return (
    <div className="flex flex-col items-center py-8 z-50">
      <div className="flex flex-col gap-4">
        <label htmlFor="password">Enter your password: </label>
        <input 
          type="password"
          id="password"
          className="w-[800px] pb-2 border-b outline-none placeholder:text-sm"
          placeholder="Ex: ********"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />
        <div className="flex items-center gap-2 justify-end mt-4 w-full">
        <Button 
        name={'Submit'}

        style='bg-blue-500'
        handleOnClick={handleResetPassword}
        />
        
      </div>
      </div>
      

  </div>
  )
}

export default ResetPassword