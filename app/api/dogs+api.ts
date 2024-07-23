import { useNavigation } from "expo-router";
import React from "react";
//import { Request, Response } from "expo-router/server";

export async function GET(request: Request): Promise<Response> {
  // Fetch data from external API
  const response = await fetch("http://localhost:8001/dogs/");
  // Check for successful response
  if (!response.ok) {
    return new Response(null, { status: response.status });
  } // Parse the response as JSON
  const data = await response.json(); // Return the data as a JSON response
  return Response.json(data);
}
