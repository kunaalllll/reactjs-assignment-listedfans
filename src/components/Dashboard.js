import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
        <div className='flex'>
            <div className='basis-[12%] h-[100vh]'>
                <Sidebar />
            </div>
            <div className='basis-[88%] border'>

            </div>


        </div>
  )
}

export default Dashboard