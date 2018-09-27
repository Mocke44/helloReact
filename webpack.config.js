var path = require('path');

module.exports = {
    entry :'./helloReact.js',
    output :{
        path:path.resolve(__dirname, ''),
        filename: 'helloReactTranspiled.js'
    },  
    module:{
        rules:[
            {
                test:/.\js$/, 
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                    presets: ['es2015','react']
                }
            }
        ]
    }
}