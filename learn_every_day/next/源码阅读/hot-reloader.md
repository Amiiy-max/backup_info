## Config
-[`server/next.ts: function createServer`](https://github.com/zeit/next.js/blob/f3b376fae56b5f81861372442849eddf6bfcbdc8/packages/next/server/next.ts#L17)  
-[`server/next-dev-server.ts: new HotReloader(this.nextConfig)`](https://github.com/zeit/next.js/blob/f3b376fae56b5f81861372442849eddf6bfcbdc8/packages/next/server/next-dev-server.ts#L212) extends [`next-server/server/next-server.ts: class Server: nextConfig`](https://github.com/zeit/next.js/blob/1544443fd506978feb46c9076a273c43f6064b36/packages/next/next-server/server/next-server.ts#L82)    
-[`server/hot-reloader.ts: config`](https://github.com/zeit/next.js/blob/f3b376fae56b5f81861372442849eddf6bfcbdc8/packages/next/server/hot-reloader.ts#L132)  
```ts
  async getWebpackConfig() {
    //...
    return Promise.all([
      getBaseWebpackConfig(this.dir, {
        dev: true,
        isServer: false,
        config: this.config,
        buildId: this.buildId,
        pagesDir: this.pagesDir,
        entrypoints: { ...entrypoints.client, ...additionalClientEntrypoints },
      }),
      getBaseWebpackConfig(this.dir, {
        dev: true,
        isServer: true,
        config: this.config,
        buildId: this.buildId,
        pagesDir: this.pagesDir,
        entrypoints: entrypoints.server,
      }),
    ])
  }
```

## spr `.next/server/static/{buildId}`
`next-server/server/next-server.ts:Server:Constructor`
```ts
    initializeSprCache({
      dev,
      distDir: this.distDir,
      pagesDir: join(
        this.distDir,
        this._isLikeServerless
          ? SERVERLESS_DIRECTORY
          : `${SERVER_DIRECTORY}/static/${this.buildId}`,
        'pages'
      ),
      flushToDisk: this.nextConfig.experimental.sprFlushToDisk,
    })
```
