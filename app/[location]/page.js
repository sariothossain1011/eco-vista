import LocationInfo from '@/components/LocationInfo'
import React from 'react'

const Locationpage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <LocationInfo lat={latitude} lon={longitude}/>
}

export default Locationpage
