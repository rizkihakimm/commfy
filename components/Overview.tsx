import Image from 'next/image'
import React from 'react'

const Overview = () => {
  return (
    <section className='flexCenter flex-col w-full pb-[100px] gap-10'>
      <div className='get-app'>
      
        <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
          We are here for you
        </p>

        <div className='flex flex-col justify-between gap-5 lg:gap-10'>
          <h2 className='bold-40 lg:bold-64 xl:max-w[390px]'>We are Guiding You to Easy Path</h2>
          <ul className='flex flex-row gap-8'>
          <li>
            Lot of Choices
          </li>
          <li>
            Best Camp Guide
          </li>
          <li>
            24 Hours Standby
          </li>
        </ul>
        <p className='regular-16 text-gray-30 xl:max-w-[720px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed nisi lacus sed viverra tellus in hac. Tellus pellentesque eu tincidunt tortor. Ac auctor augue mauris augue neque gravida in fermentum et.</p>
        </div>
      </div>
    </section>

  )
}

export default Overview