// // app/trpc.ts
// import { createTRPCReact } from "@trpc/react-query";
// import type { AppRouter } from "../shared/trpc.ts"; // <-- rätt nu
// import { httpBatchLink } from "@trpc/client";

// export const trpc = createTRPCReact<AppRouter>();

// export const trpcClient = trpc.createClient({
// 	links: [
// 		httpBatchLink({
// 			url: "http://192.168.x.x:3000/trpc",
// 		}),
// 	],
// });
