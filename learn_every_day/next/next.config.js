/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2019-08-07 16:34:42
 * @Last Modified by: gupeng
 * @Last Modified time: 2019-11-28 17:23:14
 */
const path = require('path');
const cssLoaderConfig = require('@zeit/next-css/css-loader-config');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withProgressBar = require('next-progressbar');
const HappyPack = require('happypack');

const isPro = process.env.NODE_ENV === 'production';

const withLess = (nextLessConfig = {}) => {
    return Object.assign({}, nextLessConfig, {
        webpackDevMiddleware(config) {
            config.watchOptions = {
                ...config.watchOptions,
                ignored: [...config.watchOptions.ignored, /[\\/]static[\\/]/, /[\\/]docs[\\/]/],
                aggregateTimeout: 2000,
                poll: 3000
            };
            return config;
        },
        webpack(config, options) {
            if (!options.defaultLoaders) {
                throw new Error('This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade');
            }

            const { dev, isServer } = options;
            const { cssModules, cssLoaderOptions, postcssLoaderOptions, lessLoaderOptions = {} } = nextLessConfig;

            options.defaultLoaders.less = cssLoaderConfig(config, {
                extensions: ['less'],
                cssModules,
                cssLoaderOptions,
                postcssLoaderOptions,
                dev,
                isServer,
                loaders: [
                    {
                        loader: 'less-loader',
                        options: lessLoaderOptions
                    }
                ]
            });

            config.module.rules.push({
                test: /\.less$/,
                use: options.defaultLoaders.less
            });

            // if (!isServer) {
            //     config.externals = config.externals || {};
            //     config.externals = { ...config.externals, react: 'React', 'react-dom': 'ReactDOM' };
            // }

            const happyThreadPool = HappyPack.ThreadPool({
                size: 2,
                id: 'happyThreadPool'
                // verbose: true,
                // debug: true,
                // bufferedMessaging: true //windows 10 turn on this
            });
            config.plugins.push(
                new HappyPack({
                    loaders: [options.defaultLoaders.babel],
                    id: 'babel',
                    threadPool: happyThreadPool
                    // threads: 4,
                })
            );
            options.defaultLoaders.babel = {
                loader: 'happypack/loader',
                options: {
                    id: 'babel'
                }
            };
            config.plugins.push(
                new HappyPack({
                    loaders: options.defaultLoaders.less,
                    id: 'less',
                    threadPool: happyThreadPool
                    // threads: 2,
                })
            );
            options.defaultLoaders.less = {
                loader: 'happypack/loader',
                options: {
                    id: 'less'
                }
            };

            if (typeof nextLessConfig.webpack === 'function') {
                return nextLessConfig.webpack(config, options);
            }

            // const chalk = require('chalk');
            // const { log } = require('util');
            // log(chalk.bold.yellow(JSON.stringify(config)));
            return config;
        }
    });
};

// eslint-disable-next-line
const nextLessConfig = withLess({
    distDir: '.next',
    generateBuildId: async () => {
        return require('./package.json').version;
    },
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]__[hash:base64:5]'
    },
    assetPrefix: isPro ? 'http://test.qie.tv:3000' : '',
    crossOrigin: 'anonymous',
    poweredByHeader: false,
    serverRuntimeConfig: {
        API: isPro ? 'https://api.qie.tv' : 'http://test.qie.tv:3000'
    },
    publicRuntimeConfig: {
        CDN: isPro ? 'https://cdn.qie.tv' : '/static',
        API: isPro ? 'https://api.qie.tv' : 'http://test.qie.tv:3000',
        PLAYER: '/static/js/player/last/qie.player.js',
        AVATAR_CDN: isPro ? '//uc.qiecdn.com' : '//uc-server.dev.qi-e.tv',
        UPLOAD_CDN: isPro ? '//upstatic.qiecdn.com' : '//upload-cdn.dev.qi-e.tv'
    }
});

const nextAnalyzerConfig = withBundleAnalyzer({
    ...nextLessConfig,
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: 'static',
            reportFilename: path.join(__dirname, '.next', 'bundles', 'server.html')
        },
        browser: {
            analyzerMode: 'static',
            reportFilename: path.join(__dirname, '.next', 'bundles', 'client.html')
        }
    }
});

module.exports = withProgressBar(isPro ? nextAnalyzerConfig : nextLessConfig);
