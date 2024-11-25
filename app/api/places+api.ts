import { ExpoRequest, ExpoResponse } from "expo-router/server";
import React from "react";

export async function GET(request: Request, url: string): Promise<Response> {
  console.log("hello")
  try {
    const response = await fetch("http://localhost:8001/places", {
					method: "GET",
					headers: {
						"Cache-Control": "no-store",
					},
				});
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
