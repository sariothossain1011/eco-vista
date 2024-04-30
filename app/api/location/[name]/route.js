import { NextResponse } from "next/server";
import { getLocationByName } from "../location-util";



export async function GET(request,{params}){
const location = await getLocationByName(params?.name);
return NextResponse.json(location)
}
