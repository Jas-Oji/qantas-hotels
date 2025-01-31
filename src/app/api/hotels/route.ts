import { NextResponse } from "next/server";
import hotels from "@/data/hotels.json";

export const GET = async () => NextResponse.json(hotels);
