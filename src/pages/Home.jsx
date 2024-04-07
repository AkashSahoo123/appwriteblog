import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Button } from "../components";
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
function Home() {
  const status = useSelector(state => state.auth.status)

  const navigate = useNavigate()
  const navigateHome = () => {
      if (status) {
          navigate('/all-posts')
      } else {
          navigate('/signup')
      }
  
  }

   {
      return (
          <div className="w-full md:py-8 mt-4 mb-8 text-center  md:min-h-auto ">
              <Container>
                  <div className="flex flex-col md:flex-row md:my-14 items-center justify-around">

                      <div className='md:w-[40%] flex flex-col items-center md:items-start '>
                      <h1 className="text-3xl md:text-5xl lg:text-6xl md:text-left text-center">
  Welcome to the <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">BlogApp!</span>
</h1>

                          <p className='md:text-left mt-6 text-center px-5 md:px-0'>Your hub for interesting reads, insights, and more. Start your journey into the world of our blog app. Happy reading!</p>
                          <Button 
                          onClick={()=> navigateHome()} 
                          className="my-4 mx-auto py-2 px-5 text-[#33BBCF] border-2 border-[#33BBCF]  rounded-xl shadow-lg duration-200  hover:cursor-pointer hover:bg-[#33BBCF] hover:text-white hover:scale-105 md:mx-2 md:my-6" 
                          >
                              {status? "See Posts":"Get Started"}
                          </Button>
                      </div>

                      <div className='md:w-[40%] mt-10 md:mt-0 flex justify-center'>
                        <div className='border-[5px] w-full max-w-[400px] rounded-xl overflow-hidden border-white shadow-2xl shadow-white/30'>
                            <img src="https://tse3.mm.bing.net/th?id=OIP._Z4QA1NAvw_xQu2F8dKbjgHaFj&pid=Api&P=0&h=220" alt="notebookImage" style={{ width: '100%', height: 'auto', display: 'block' }} />
                        </div>
                        </div>

                  </div>
              </Container>
          </div>
      )
  }
  
}

export default Home
