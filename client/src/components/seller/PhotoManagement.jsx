import React from 'react'
import DashboardHeader from '../DashboardHeader'
import ImageAdd from '../ImageAdd'

const PhotoManagement = () => {
  return (
    <div className='flex flex-col sm:flex-row '>
        <div>
            {/* header will be here  */}
            <DashboardHeader />
            {/* image and component will be here  */}
            <ImageAdd />
        </div>
      
    </div>
  )
}

export default PhotoManagement
