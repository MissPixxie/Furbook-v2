// import { ExpoRequest, ExpoResponse } from "expo-router/server";
// import React from "react";

// export async function GET(request: Request, url: string): Promise<Response> {
//   // Fetch data from external API
//   const response = await fetch("http://localhost:8001/events");
//   // Check for successful response
//   if (!response.ok) {
//     return new Response(null, { status: response.status });
//   } // Parse the response as JSON
//   const data = await response.json(); // Return the data as a JSON response
//   return Response.json(data);
// }

import { ExpoRequest, ExpoResponse } from "expo-router/server";
import React from "react";

export async function GET(request: Request, url: string): Promise<Response> {
  try {
    const response = await fetch("http://localhost:8001/events");
    console.log(response)
    if (!response.ok) {
      console.error("Failed to fetch data from backend:", response.status);
      return new Response("Error fetching data", { status: 500 });
    }

    const data = await response.json();
    
    if (!data) {
      console.error("No data received from backend");
      return new Response("No data", { status: 404 });
    }

        return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in GET request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}

