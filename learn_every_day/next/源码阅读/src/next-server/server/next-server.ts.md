## [getRequestHandler](https://github.com/gugegev5/backup_info/blob/f00d312bb1532bdcaff3419cef91c6e9bdb1969a/learn_every_day/next/%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/src/next-server/server/next-server.ts#L244) 
```ts
  public getRequestHandler() {
    return this.handleRequest.bind(this)
  }

  private handleRequest(
    req: IncomingMessage,
    res: ServerResponse,
    parsedUrl?: UrlWithParsedQuery
  ): Promise<void> {
    // Parse url if parsedUrl not provided
    if (!parsedUrl || typeof parsedUrl !== 'object') {
      const url: any = req.url
      parsedUrl = parseUrl(url, true)
    }

    // Parse the querystring ourselves if the user doesn't handle querystring parsing
    if (typeof parsedUrl.query === 'string') {
      parsedUrl.query = parseQs(parsedUrl.query)
    }

    res.statusCode = 200
    return this.run(req, res, parsedUrl).catch(err => {
      this.logError(err)
      res.statusCode = 500
      res.end('Internal Server Error')
    })
  }
  
  protected async run(
    req: IncomingMessage,
    res: ServerResponse,
    parsedUrl: UrlWithParsedQuery
  ) {
    this.handleCompression(req, res)

    try {
      const fn = this.router.match(req, res, parsedUrl)
      if (fn) {
        await fn()
        return
      }
    } catch (err) {
      if (err.code === 'DECODE_FAILED') {
        res.statusCode = 400
        return this.renderError(null, req, res, '/_error', {})
      }
      throw err
    }

    await this.render404(req, res, parsedUrl)
  }
```

## [render](https://github.com/gugegev5/backup_info/blob/f00d312bb1532bdcaff3419cef91c6e9bdb1969a/learn_every_day/next/%E6%BA%90%E7%A0%81%E9%98%85%E8%AF%BB/src/next-server/server/next-server.ts#L592) [源码地址](https://github.com/zeit/next.js/blob/be31c707a77a3dec0aff1ab19ead7beb4517feae/packages/next/next-server/server/next-server.ts#L592)
```ts
  public async render(
    req: IncomingMessage,
    res: ServerResponse,
    pathname: string,
    query: ParsedUrlQuery = {},
    parsedUrl?: UrlWithParsedQuery
  ): Promise<void> {
    const url: any = req.url

    if (
      url.match(/^\/_next\//) ||
      (this.hasStaticDir && url.match(/^\/static\//))
    ) {
      return this.handleRequest(req, res, parsedUrl)
    }

    if (isBlockedPage(pathname)) {
      return this.render404(req, res, parsedUrl)
    }

    const html = await this.renderToHTML(req, res, pathname, query, {
      dataOnly:
        (this.renderOpts.ampBindInitData && Boolean(query.dataOnly)) ||
        (req.headers &&
          (req.headers.accept || '').indexOf('application/amp.bind+json') !==
            -1),
    })
    // Request was ended by the user
    if (html === null) {
      return
    }

    return this.sendHTML(req, res, html)
  }
```
