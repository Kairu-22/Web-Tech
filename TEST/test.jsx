import { useState } from 'react'

const ProblemStatement = () => {
  const [active, setActive] = useState(false);
  const [teamLeft, setTeamLeft] = useState(10);

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-[3rem] sm:text-[4rem] text-white text-center inline-block py-4 m-3">Problem Statement</h1>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border  border-opacity-10	flex flex-row bg-[rgba(255,255,255,0.2)] shadow-md backdrop-blur-[4px] -webkit-backdrop-blur-[4px] border-[rgba(255,255,255,0.18)] p-4">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>

      {/* <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 shadow-md	flex flex-row">
        <div className=" flex justify-center  items-center w-1/6">
          <i className="fa-solid fa-circle text-white text-2xl" />
        </div>
        <div className=" flex justify-center items-center flex-col w-2/3 text-white">
          <h3 className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, voluptatem.</h3>
          <p className='text-sm text-gray-400 '>
            Count : {teamLeft}
          </p>
        </div>
        <div className=" flex justify-center items-center w-1/6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="solid" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white w-8 h-8 hover:cursor-pointer" onClick={() => setActive(!active)}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>

        </div>
      </div> */}










      
      {/* <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div>
      <div className="m-3 h-[4.5rem] md:h-[6rem] w-[30.375rem] md:w-[41.625rem] lg:w-[28.125rem] rounded-lg border border-white border-opacity-10 "></div> */}
    </div>
  )
}

export default ProblemStatement;