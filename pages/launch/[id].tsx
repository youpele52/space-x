import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GET_LAUNCH_DETAILS } from '../../graphql/queries'
import { LaunchDetailsQuery } from '../../graphql/graphql'
import { useLazyQuery, useQuery } from '@apollo/client'
import link from 'next/link'

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

  return (
    <div>
      <Head>
        <title>{launchData && launchData.mission_name}</title>
        <link rel='icon' href={launchData && launchData.links.mission_patch} />
      </Head>
      <main className='contain'>
        <div className=''>
          <article className='review sm:px-20 md:px-40 lg:px-40 xl:px-40 2xl:px-40 '>
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
            <h4 className='author font-bold text-3xl'>
              {launchData && launchData.mission_name}
            </h4>
            <p className='detail'>{launchData && launchData.details}</p>
          </article>
        </div>

        <div className='box sm:box md:box lg:box pl-8  mb-10'>
          {launchData &&
            launchData.links.flickr_images.map((image) => (
              <div className='carded '>
                <div className='imgBx'>
                  <img src={image} alt='' />
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  )
}
