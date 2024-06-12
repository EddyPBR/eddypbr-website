module.exports = {
  future: {
    webpack5: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://eddypbr.com/",
        permanent: true,
      },
    ];
  },
};
