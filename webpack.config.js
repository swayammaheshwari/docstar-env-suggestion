var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/App.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,  // New rule for images
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        'react': 'commonjs react',
        'react-dom': 'commonjs react-dom'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AddUseClientDirective', (compilation) => {
                    const fs = require('fs');
                    // We can assume strict output structure as defined above
                    const filePath = path.resolve(__dirname, 'build', 'index.js');
                    if (fs.existsSync(filePath)) {
                        const content = fs.readFileSync(filePath, 'utf8');
                        // Prepend if not already present (optimization for watch mode)
                        // Note: Checking strict start might fail if there are comments, but 'use client' should be first.
                        // We strictly prepend it.
                        if (!content.trim().startsWith('"use client";')) {
                            fs.writeFileSync(filePath, '"use client";\n' + content);
                        }
                    }
                });
            }
        }
    ]
};