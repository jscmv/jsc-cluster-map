module.exports = {
  reactStrictMode: true,
  env: {
    DOMAINSS: process.env.DOMAINSS
  },
  basePath: '/cluster-map',
  trailingSlash: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{loader:'@svgr/webpack', options:{
        svgo: false
      }}],
      
    })

    return config
  },
}
