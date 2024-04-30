'use client'

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

const LocationDetector = () => {

    const [loading ,setLoading] = useState();
    const searchParams= useSearchParams();
    const pathName = usePathname();
    const router = useRouter();

    useEffect(()=>{
        setLoading(true);
        const params = new URLSearchParams(searchParams);
       if(navigator.geolocation){
        navigator.geolocation.set("latitute",position.coords.latitute);
        navigator.geolocation.set("longitute",position.coords.longitute);
        setLoading(false)
        router.push(`/current?${params.toString()}`)
       }

    },[searchParams,pathName])
  return (
    <div>LocationDetector</div>
  )
}

export default LocationDetector