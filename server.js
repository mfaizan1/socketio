const koa = require('koa');
const app = new koa();

app.use(ctx =>{
    ctx.body = "hello world";
});

app.listen(3000);