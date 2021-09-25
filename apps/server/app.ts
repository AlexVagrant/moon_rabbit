import Koa, {Context} from "koa";
const app = new Koa();

app.use((ctx: Context) => {
  ctx.body = 'Hello Koa';
});

app.listen(9001, () => {
  console.log("server is start with 3000 port");
})
