import React, { useState, useEffect } from 'react'
import Launch from './Launch'
import FlipMove from 'react-flip-move'
import { PastLaunchesListQuery } from '../graphql/graphql'

export default function LaunchList({ data }) {
  //   if (data) {
  //     console.log(data)
  //   }
  return (
    <div className='  ml-20 sm:ml-0'>
      {data && (
        <div className='box'>
          {data.map((launchData) => (
            <Launch
              key={launchData.id}
              launchData={launchData}
              //   id={launchData.id}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// <div>
//     {data && (
//       <div className='px-5 my-10 sm:grid md:grid-cols-3 xl:grid-cols-5  3xl:flex flex-wrap justify-center '>
//         {data.map((launchData) => (
//           <Launch
//             key={launchData.id}
//             launchData={launchData}
//             //   id={launchData.id}
//           />
//         ))}
//       </div>
//     )}
//   </div>
