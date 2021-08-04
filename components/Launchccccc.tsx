import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Launch({ launchData }) {
  return (
    <div className='p-4 m-10 group  cursor-pointer transition duration-200 ease-in transform sm:hover:scale-125 hover:z-125'>
      <Link href={`/launch/${launchData.id}`}>
        <div>
          <img
            // layout='responsive'
            src={
              launchData.links.flickr_images[0] ||
              launchData.links.mission_patch_small
            }
            alt={launchData.mission_name}
            height='300'
            width='300'
          />
          <div className='p-2'>
            <p className='truncate max-w-md text-center'>
              {launchData.rocket.rocket_name}
            </p>
            <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold text-center'>
              {launchData.mission_name}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  )
}
