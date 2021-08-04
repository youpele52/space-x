import { useLazyQuery, useQuery } from '@apollo/client'
import Head from 'next/head'
// import { UserIcon } from '@heroicons/react/solid'
import { GET_PAST_LAUNCHES_LIST } from '../graphql/queries'
import { useEffect, useState } from 'react'
import { PastLaunchesListQuery } from '../graphql/graphql'
import LaunchList from '../components/LaunchList'

export default function Home() {
  const [launchListData, setLaunchListData] =
    useState<PastLaunchesListQuery['launchesPast']>()
  const { loading, data, error } = useQuery<PastLaunchesListQuery>(
    GET_PAST_LAUNCHES_LIST,
    {
      variables: { limit: 100 },
    }
  )
  // if (loading || !data)
  //   return <h1 className='text-7xl font-semibold'>Loading...</h1>
  useEffect(() => {
    if (data) {
      if (typeof data.launchesPast === undefined) {
      } else {
        setLaunchListData(data.launchesPast)
      }
    }
  }, [data])

  return (
    <div className=''>
      <Head>
        <title>SpaceX</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <LaunchList data={launchListData} />
        {/* <div>
          <pre>{JSON.stringify(launchListData, null, 2)}</pre>
        </div> */}
      </main>
    </div>
  )
}
