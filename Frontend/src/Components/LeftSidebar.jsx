import React from 'react'

const LeftSidebar = () => {
  return (
    <div className=' w-[20vw]   h-fit'>
       
      <div className="w-[250px] bg-white min-h-fit border border-gray-300 shadow-xl rounded-xl ">
      <div className="">
        <div className="w-full rounded-t-xl  h-[70px] bg-[#A0B4B7]"></div>
        <div className="flex justify-center ">
             <img className='h-20 w-20 rounded-full relative bottom-10' src="https://media.licdn.com/dms/image/D5603AQEgRY5WmGG4sw/profile-displayphoto-shrink_100_100/0/1694104377249?e=1721260800&v=beta&t=9iGVGSoRoZa44kSZUxkPBhsoRb79-Op7PXBLiqTkkUM" alt="img" />
        </div>
       
      </div>
        <h3 className='text-center text-xl font-semibold'>Muzzammil Afridi</h3>
        <p className='text-center p-3 text-gray-600'>Frontend Web developer | HTML | CSS | Tailwind CSS | Javascript | React Js
        <div className="h-[1px]  bg-gray-300 mt-3"></div>
        <div className="flex text-[14px] justify-between mt-2">
            <p>Profile View</p>
            <p className='text-[#0A66C2]'>165</p>
        </div>
        <div className="flex justify-between text-[14px] mt-2">
            <p >Post impressions</p>
            <p className='text-[#0A66C2]'>165</p>
        </div>
        <div className="h-[1px] bg-gray-300 mt-3"></div>

</p>
      </div>
      <div className=""></div>
    </div>
  )
}

export default LeftSidebar
