import express from 'express';
import fs from 'fs'; //?
import path from 'path';
import * as url from 'url';
import { renderPage, prerenderPages } from './common';
import lruCache from 'lru-cache';

const ssrCache = new lruCache({
  max: 100,
  maxAge: 1000 * 60,
});

const app = express();

const prerenderHTML = {};
for (const page of prerenderPages) {
  const pageHtml = fs.readFileSync(path.resolve(__dirname, `../dist/${page}.html`), 'utf8');
  prerenderHTML[page] = pageHtml;
}

app.use('/dist', express.static('dist'));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const cacheKey = parsedUrl.path;
  if (ssrCache.has(cacheKey)) {
    console.log('캐시 사용');
    res.send(ssrCache.get(cacheKey));
    return;
  }
  const page = parsedUrl.pathname ? parsedUrl.pathname.substring(1) : 'home';

  const initialData = { page };
  const pageHtml = prerenderPages.includes(page) ? prerenderHTML[page] : renderPage(page);
  const result = pageHtml.replace('__DATA_FROM_SERVER', JSON.stringify(initialData));
  ssrCache.set(cacheKey, result);
  res.send(result); //완성된 html을 클라이언트에 전송
});

app.listen(3000);
