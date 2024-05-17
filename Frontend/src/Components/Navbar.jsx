import React from 'react'


const Navbar = () => {
  return (
    <div className='flex justify-between py-4 bg-white border-b items-center border-gray-200 px-[3vw]'>
      <div className="flex gap-5 items-center">
      <h2>Logo</h2>
      <input type="text" className='bg-[#EDF3F8] py-2 pl-3 w-[280px]' placeholder='Search'/>
      </div>
      <div className="flex gap-5 text-gray-700">
        <a>Home</a>
        <a>My Network</a>
        <a>Jobs</a>
        <a>Messaging</a>
        <a>Notification</a>
        
      </div>
    </div>
  )
}

export default Navbar
