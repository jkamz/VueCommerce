module.exports = {
<<<<<<< Updated upstream
    publicPath: '<VueCommerce>'
=======
  publicPath: process.env.NODE_ENV === 'production'
    ? '/VueCommerce/'
    : '/'
>>>>>>> Stashed changes
}