import { NextResponse } from "next/server";
import { getAllLocations } from "./location-util";



export async function GET(){
const locations = await getAllLocations();
return NextResponse.json(locations)
}









