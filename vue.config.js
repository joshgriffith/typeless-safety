var fs  = require('fs');

module.exports = {

    outputDir: './wwwroot',
    assetsDir: 'assets',
    productionSourceMap: false,
    
    css: {
        loaderOptions: {
            sass: {
                implementation: require('sass')
            }
        }
    }
};