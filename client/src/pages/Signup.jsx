import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';
import toast from "react-hot-toast";
const Signup = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleSignup = async () =>{
    e.preventDefault();

    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/signup", {
        username,
        email, 
        password, 
        accountType
      });

      const data = await res.data;
      if(data.success){
        setUsername("");
        setEmail("");
        setPassword("");
        setAccountType("");
        toast.success(data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[27vw]'>
          <h1 className='text-2xl font-bold text-center mb-4'>Let's Connectt</h1>
          <form onSubmit={handleSignup}>
              <div className='mb-4'>
                <label htmlFor="username" className='block text-sm font-medium text-gray-700 mb-2'>Username
                </label>

                <input type="text" name='name' id='name' placeholder='Anshuman' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'
                value={username}
                onChange={(e)=> setUsername(e.target.value)} />
              </div>
              
              {/**📌For Email  */}
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>Email Adress
                </label>

                <input type="text" name='email' id='email' placeholder='your@email.com' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'
                value={email}
                onChange={(e)=> setEmail(e.target.value)} />
              </div>

              {/*📌For Password */}
              <div className='mb-4'>
                <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>Password
                </label>

                <input type="password" name='password' id='password' placeholder='Enter your password' className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black' 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
              </div>

              {/**📌For Account Selection :  */}
              <div className='mb-4'>
                <label htmlFor="accountType" className='block text-sm font-medium text-gray-700 mb-2'>Select Your Account Type
                </label>

                <select onChange={(e)=> setAccountType(e.target.value)} className='shadow-md rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-black focus:border-black'>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>

              {/*📌Login with Your Account */}
              <div className='items-center flex justify-end mb-4'>
                <Link className='text-xs text-black cursor-pointer' to="/login">
                  Log In with Account
                </Link>
              </div>
              <button type='submit' className='w-full py-2 px-4 rounded-md shadow-md text-sm font-medium text-white bg-black'>
                  Signup
              </button>
          </form>
        </div>
    </div>
  )
}

export default Signup
