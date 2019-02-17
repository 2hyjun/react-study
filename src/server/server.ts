import * as Koa from 'koa';
import * as serve from 'koa-static';
import * as path from 'path';
import * as fs from 'fs';

const app = new Koa();

const indexHtml = fs.readFileSync(path.resolve(__dirname, '../../build/index.html'), { encoding: 'utf8' });

app.use(serve(path.resolve(__dirname, '../../build/')));
app.use((ctx) => {
  ctx.body = indexHtml;
});

app.listen(3001, undefined, undefined, () => console.log('server listening on port 3001'));
