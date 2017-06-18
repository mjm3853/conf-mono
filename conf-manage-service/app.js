const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello conf.io';
});

app.listen(3000);