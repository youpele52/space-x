import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Launch({ launchData }) {
  return (
    <Link href={`/launch/${launchData.id}`}>
      <div className='card  cursor-pointer group '>
        <div className='imgBx'>
          <img
            src={
              launchData.links.flickr_images[0] ||
              launchData.links.mission_patch_small
            }
            alt={launchData.mission_name}
          />
        </div>
        <div className='details overflow-hidden group-hover:overflow-visible'>
          <h2>
            {launchData.mission_name} <br />{' '}
            <span>{launchData.rocket.rocket_name}</span>
          </h2>
        </div>
      </div>
    </Link>
  )
}
// <Link href={`/launch/${launchData.id}`}>
//     <div className='a-box'>
//       <div className='img-container'>
//         <div className='img-inner'>
//           <div className='inner-skew'>
//             <img
//               src={
//                 launchData.links.flickr_images[0] ||
//                 launchData.links.mission_patch_small
//               }
//               alt={launchData.mission_name}
//             />
//           </div>
//         </div>
//       </div>
//       <div className='text-container'>
//         <h3 className='group-hover:font-bold transition-all duration-100 ease-in-out text-2xl'>
//           {launchData.mission_name}
//         </h3>
//         <div>{launchData.rocket.rocket_name}</div>
//       </div>
//     </div>
//   </Link>
// </div>
