module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static.wixstatic.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'prod-sfcc-api.michaelhill.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  }