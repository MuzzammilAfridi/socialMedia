import React from 'react'

const Post = () => {
  return (
    <div className='bg-white mb-5 border shadow-sm rounded-lg'>
      <div className="w-full flex">
        <img className='h-[50px] w-[50px] rounded-full' src="https://media.licdn.com/dms/image/D5603AQEgRY5WmGG4sw/profile-displayphoto-shrink_400_400/0/1694104377249?e=1721260800&v=beta&t=I4uUa5l6Lvv7mS0XuUNThyyU1CVbE_SqGLnOxqYLedc" alt="img" />
        <div className="">
            <span className='text-[17px] ml-3 font-medium'>Muzzammil Afridi</span>
            <span className='text-[14px] ml-3 text-gray-400'>Following</span>
            <p className='ml-3 w-[74%]  truncate text-[15px] text-gray-400'>Freelancer | Front-End Developer | MERN Stack Developer | Learning DSA on leetcode</p>
        </div>
      </div>
      <div className="w-full h-[70vh] bg-cyan-500 my-3">

      </div>
      <div className="">
        <p className='ml-2'>15 Likes</p>
        <div className='w-full bg-zinc-400 h-[1px] my-2'></div>
        <div className="flex justify-evenly py-3">
        <a href="#">Like</a>
        <a href="#">Comment</a>
        <a href="#">Repost</a>
        <a href="#">Send</a>
        </div>
        
      </div>
    </div>
  )
}

export default Post
