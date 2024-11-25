import React from "react";

export async function GET(request: Request): Promise<Response> {
  // Fetch data from external API
  const response = await fetch("http://localhost:8001/users/");
  // Check for successful response
  if (!response.ok) {
    return new Response(null, { status: response.status });
  } // Parse the response as JSON
  const data = await response.json(); // Return the data as a JSON response
  return Response.json(data);
}

// export async function POST(request: Request): Promise<Response> {
//   // Fetch data from external API
//   // const email = "test@hotmail.com";
//   // const test = new Request("http://localhost:8001/sign-in/", {
//   //   method: "POST",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({
//   //     email: "test@hotmail.com",
//   //     password: "1234"
//   //   }),
//   // });
//   const response = await fetch("http://localhost:8001/users/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: "test@hotmail.com",
//       password: "1234"
//     }),
//   });
//   //Check for successful response
//   if (!response.ok) {
//     return new Response(null, { status: response.status });
//   } // Parse the response as JSON
//   const data = await response.json(); // Return the data as a JSON response
//   return Response.json(data.email);
// }
