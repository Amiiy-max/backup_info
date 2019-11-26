```es6
const chalk = require('chalk');
const { log } = require('util');

const threadLoaderConfig = {
    loader: 'thread-loader',
    options: {
        workers: 2,
        workerParallelJobs: 50,
        workerNodeArgs: ['--max-old-space-size=4096'],
        poolRespawn: false
    }
};
const threadLoader = require('thread-loader');
threadLoader.warmup(
    threadLoaderConfig.options,
    ['next', "@zeit/next-css", 'less-loader']
);
options.defaultLoaders.babel = [threadLoaderConfig, options.defaultLoaders.babel];
```
