/* PATH FOR FILES
 =================================*/
var path = {
    // FINISH FILE PROJECT
    dist: {
        // JADE
        html        :   './dist/',
        // SCSS & SASS
        style       :   './dist/style/',
        font        :   './dist/style/',
        // SCRIPTS
        script      :   './dist/script/',
        // IMAGE & IMAGE ICON
        image       :   './dist/image/',
        imageIcon   :   './dist/image/icon/'
    },

    // WORK FILES
    src: {
        // JADE
        jade        :   './src/html/**.jade',
        // SCSS & SASS
        scss        :   './src/style/SCSS/**.scss',
        scssFont    :   './src/style/_fonts/**.scss',
        // SCRIPTS
        script      :   [
            './src/**/**.js',
            './src/**/**.js'
        ],
        // IMAGE & IMAGE ICON
        image       :   [
            './src/image/**.png',
            './src/image/**.gif',
            './src/image/**.jpg'
        ],
        imageIcon   :   './src/image/_icon/**.png',
        // SASS DOCUMENTATION
        sassdoc     :   './src/style/**/*.scss'
    },

    // STREAM/WATCH FILE
    watch:{
        // JADE & JADE WATCH FILE
        jade        :   './src/html/**.jade',
        jadeWatch   :   './src/html/**/**.jade',
        // SASS & SCSS WATCH FILE
        scss        :   './src/style/**.scss',
        scssWatch   :   './src/style/**/**.scss',
        scssFont    :   './src/style/_fonts/**.scss',
        // SCRIPTS
        script      :   './src/script/**.js'
    }
};

module.exports = path;
