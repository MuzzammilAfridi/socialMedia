import React from 'react'

const SharePost = () => {
  return (
    <div className='md:w-[55vw] w-screen h-fit border sm:mx-4  py-3 bg-white shadow-lg rounded-lg '>
      <div className="flex justify-center items-center gap-4">
        <img className='h-[50px] w-[50px] rounded-full' src="https://media.licdn.com/dms/image/D5603AQEgRY5WmGG4sw/profile-displayphoto-shrink_800_800/0/1694104377249?e=1721260800&v=beta&t=Ou3qAB3MM9WZsiJ_SCw_Q5gPuY_6DEMukX3EZ-IkKfg" alt="img" />
        <a className='w-[80%] py-3 bg-[#F3F3F3] border rounded-full pl-5 ' href="#">Share Your Post</a>
      </div>
      <div className=" flex justify-evenly py-4">
        <a href="#">Media</a>
        <a href="#">Event</a>
        <a href="#">Write Article</a>
      </div>
    </div>
  )
}

export default SharePost
