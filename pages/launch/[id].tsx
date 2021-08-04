import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GET_LAUNCH_DETAILS } from '../../graphql/queries'
import { LaunchDetailsQuery } from '../../graphql/graphql'
import { useLazyQuery, useQuery } from '@apollo/client'
import moment from 'moment'
import { ClockIcon, LocationMarkerIcon } from '@heroicons/react/solid'

export default function Launch() {
  const router = useRouter()
  const { id } = router.query
  const [launchData, setLaunchData] = useState<LaunchDetailsQuery['launch']>()

  const [getLaunchData, { loading, data, error }] =
    useLazyQuery<LaunchDetailsQuery>(GET_LAUNCH_DETAILS, {
      variables: { id: id },
    })

  useEffect(() => {
    getLaunchData()
    if (data) {
      if (typeof data.launch === undefined) {
      } else {
        setLaunchData(data.launch)
      }
    }
  }, [id, data])

  // console.log(launchData)
  return (
    <div>
      <Head>
        <title>{launchData && launchData.mission_name}</title>
        <link rel='icon' href={launchData && launchData.links.mission_patch} />
      </Head>
      <main className=''>
        <div className=''>
          <article className='review mt-20 px-10 sm:px-20 md:px-40 lg:px-40 xl:px-40 2xl:px-40 '>
            <div className='img-container'>
              <img
                src={
                  (launchData && launchData.links.mission_patch) ||
                  (launchData && launchData.links.flickr_images[0])
                }
                alt={launchData && launchData.mission_name}
                className='person-img'
              />
            </div>
            <h2 className='author font-bold text-3xl'>
              {launchData && launchData.mission_name}
            </h2>
            <h3 className='text-xl font-semibold my-2'>
              {launchData && launchData.rocket.rocket_name}
            </h3>
            <section>
              <p className='detail'>{launchData && launchData.details}</p>
              <p className='text-md font-light my-1 text-gray-500 '>
                <span>
                  <LocationMarkerIcon className='h-5 inline' />
                </span>{' '}
                {launchData && launchData.launch_site.site_name_long}.
              </p>
              <p className='text-md font-light my-1 text-gray-500 '>
                <span>
                  <ClockIcon className='h-5 inline' />
                </span>{' '}
                {launchData &&
                  moment(launchData.launch_date_utc).format(
                    'h:mm:ss a, D MMMM YYYY'
                  )}
                .
              </p>
            </section>
          </article>
        </div>

        <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center ml-0 md:ml-5 lg:ml-28 '>
          {launchData &&
            launchData.links.flickr_images.map((image, index) => (
              <li className='carded ' key={index}>
                <div className='imgBx'>
                  <img src={image} alt='' />
                </div>
              </li>
            ))}
        </ul>
      </main>
    </div>
  )
}
