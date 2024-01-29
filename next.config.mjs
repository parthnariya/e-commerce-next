/** @type {import('next').NextConfig} */
const nextConfig = {
  // redirects: () => {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/products/1",
  //       permanent: true,
  //     },
  //     {
  //       source: "/products",
  //       destination: "/products/1",
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.slingacademy.com",
        port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default nextConfig;
