import React from "react";

export async function GET(request: Request, url: string): Promise<Response> {
  // Fetch data from external API
  const response = await fetch("http://localhost:8001/messages");
  // Check for successful response
  if (!response.ok) {
    return new Response(null, { status: response.status });
  } // Parse the response as JSON
  const data = await response.json(); // Return the data as a JSON response
  console.log(data);
  return Response.json(data);
}
