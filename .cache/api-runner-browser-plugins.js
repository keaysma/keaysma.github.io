module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Resume","short_name":"Landing","start_url":"/public/","background_color":"#EE3399","theme_color":"#EE3399","display":"standalone","icon":"src/assets/img/website-icon.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"9355a353b3ae9772cf7404f25d5420d8"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
