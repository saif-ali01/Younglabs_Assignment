import React, { useState } from 'react'
import axios from "axios"

// Form component to collect user's name and fetch a greeting from the backend
export const FormComponent = () => {

// State to store user input (name), isActive track whether the form is active or the greeting should be displayed,greeting message received from the server,handle any error messages
  const [name, setName] = useState("");
  const [isActive, setIsActive] = useState(true);
  const [greeting, setGreeting] = useState(null);
  const [error, setError] = useState(null);

  //Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();


    // Validate if the input field is not empty
    if (!name.trim()) {
      setError("Name is required!");
      setGreeting(null);
      return;
    }

    try {
       // Make a GET request to fetch the greeting message
      const response = await axios.get(`https://younglabs-assignment-d8nw.onrender.com/api/greet?name=${name}`);
      setIsActive(false);
      setGreeting(response.data.message);
      setError(null);
    } catch (err) {   // Handle API errors and set appropriate error messages
      setGreeting(null);
      setError(err.response?.data?.error || "Something went wrong");
    }
  };


  return (
    <div className="flex   h-full w-full  justify-center items-center  px-4 ">
     {/* Here conditional rendering  if isActive true than show form other wise show Greeting components */}
      {isActive ? (
        <form onSubmit={handleSubmit} className='flex  flex-col justify-center items-center w-full max-w-md '>
          <input 
            type="text" 
            placeholder='Please Enter Your Name Here' 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='w-full bg-transparent border border-white/70 h-12 md:h-16 placeholder:text-lg md:placeholder:text-2xl p-3 md:p-5 text-lg md:text-2xl   rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 '
          />
          <button 
            type="submit" 
            className='bg-green-500 w-full md:w-44 py-3 rounded-full mt-5 text-black text-lg md:text-xl font-medium hover:bg-green-600 transition-colors duration-200'
          >
            Get Greeting
          </button>
        </form>
      ) : (
        <div className="text-center">
          {error && <p className="text-red-500 mt-3 text-lg md:text-xl">{error}</p>}
          {greeting && <Greeting name={name} />}
        </div>
      )}
    </div>
  )
}

// Greeting component to display the personalized message
export const Greeting = ({ name }) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6">
      <h1 className='text-xl md:text-2xl lg:text-3xl'>
        Hello, <span className='text-2xl md:text-3xl lg:text-4xl text-green-400 uppercase'>{name}!</span>
      </h1>
      <h2 className='text-xl md:text-2xl lg:text-3xl'>
        Welcome to {' '}
        <a 
          href="https://www.younglabs.in/" 
          target='_blank' 
          rel="noopener noreferrer"
          className='hover:cursor-pointer underline text-green-500 hover:text-green-400 transition-colors duration-200'
        >
          Younglabs
        </a>
      </h2>
    </div>
  )
}


// Main App component that renders the form inside a styled container
const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-gray-900">
      <div className="w-full max-w-2xl rounded-xl bg-white/5 backdrop-blur-sm shadow-lg py-8 px-4 sm:px-8 md:py-12 md:px-12">
        <FormComponent />
      </div>
    </div>
  )
}

export default App