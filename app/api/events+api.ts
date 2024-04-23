import { ExpoRequest, ExpoResponse } from "expo-router/server";
import React from "react";

export async function GET(
  request: ExpoRequest,
  url: string
): Promise<ExpoResponse> {
  // Fetch data from external API
  const response = await fetch("http://localhost:8001/events");
  // Check for successful response
  if (!response.ok) {
    return new ExpoResponse(null, { status: response.status });
  } // Parse the response as JSON
  const data = await response.json(); // Return the data as a JSON response
  return ExpoResponse.json(data);
}
