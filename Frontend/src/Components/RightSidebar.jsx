import React from 'react'
import News from './News'

const RightSidebar = () => {
  return (
    <div className='h-fit w-[18vw] rounded-lg shadow-xl py-3  bg-white border border-gray-300'>
          <h2 className='text-lg font-medium px-4'>LinkedIn News</h2>
            <p className='text-[16px] px-4 text-gray-400'>Top Stories</p>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
      
       

    </div>
  )
}

export default RightSidebar
