import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import LeftSidebar from './Components/LeftSidebar'
import RightSidebar from './Components/RightSidebar'
import SharePost from './Components/SharePost'
import CenterContent from './Components/CenterContent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='sm:px-[1vw] overflow-x-clip bg-[#F4F2EE]'>
    <Navbar/>
    <div className="flex justify-between mt-4">
      <div className="hidden md:block">
    <LeftSidebar/>
    </div>
    <div className="flex  flex-col items-center">
    <SharePost/>
    <CenterContent/>
    </div>
    <div className=" lg:block hidden">
    <RightSidebar/>
    </div>
    </div>
    </div>
  )
}

export default App
