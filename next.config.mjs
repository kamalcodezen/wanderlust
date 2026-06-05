// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//       {
//         protocol: "http",
//         hostname: "**",
//       }
//     ]
//   },

//   experimental: {
//     serverComponentsExternalPackages: [
//       `@better-auth/kysely-adapter`
//     ]
//   }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { protocol: "http", hostname: "**" },
    ],
  },
};

export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactCompiler: true,

//   images: {
//     remotePatterns: [
//       { protocol: "https", hostname: "**" },
//       { protocol: "http", hostname: "**" },
//     ],
//   },

//   serverExternalPackages: [
//     "@better-auth/kysely-adapter",
//   ],
// };

// export default nextConfig;