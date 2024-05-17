import React from 'react'
import Post from './Post'

const CenterContent = () => {
  return (
    <div className='h-fit w-screen md:w-[55vw] md:px-3 lg:px-0 my-3 '>
      <Post />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default CenterContent
