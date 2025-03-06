import React, { useState } from 'react'
import axios from "axios"
export const FormComponent = () => {
  const [name, setName] = useState("");
  const [isActive,setIsActive] = useState(true);
  const [greeting, setGreeting] = useState(null);
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Name is required!");
      setGreeting(null);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/api/greet?name=${name}`);
      setIsActive(false);
      setGreeting(response.data.message);
      setError(null);
    } catch (err) {
      setGreeting(null);
      setError(err.response?.data?.error || "Something went wrong");
    }
  };
  return (
    <div className="flex h-full w-full justify-center items-center ">
      {isActive ? <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
        <input type="text" placeholder='Please Enter Your Name Here' required value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-96 bg-transparent border border-white/70 h-16 placeholder:text-2xl p-5 text-2xl' />
        <button type="submit" className='bg-green-500 w-44 py-3 rounded-full mt-5 text-black text-xl font-serif font-medium hover:bg-green-600'>Get Greeting</button>
      </form>
        :
        (
          <div className="">
            {error && <p className="text-red-500 mt-3">{error}</p>}
            {greeting && <Greeting name={name} />}
          </div>
        )
      }
    </div>
  )
}


export const Greeting = ({ name }) => {
  return (
    <div className=" flex flex-col w-full h-full justify-center items-center">
      <h1 className='text-2xl ' >Hello, <span className='text-3xl text-green-400 uppercase'>{name}!</span></h1>
      <h2 className='text-2xl '>Welcome to <a href="https://www.younglabs.in/" target='_blank' className='hover:cursor-pointer underline text-green-500'>Younglabs</a></h2>
    </div>
  )
}

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="sm:w-[50vw] sm:h-[60vh] rounded-md bg-white/5">
        <FormComponent />
      </div>
    </div>
  )
}

export default App