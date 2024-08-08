import express from"express";
import userrouter from "./routers/user";
import workerrouter from "./routers/worker";
const app =express();

app.use("/v1/user",userrouter);
app.use("/v1/user",workerrouter);

app.listen(3000)