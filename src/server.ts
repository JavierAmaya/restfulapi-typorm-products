import app from "./app";

app.listen(process.env.PORT, ()=>{
    console.log(`server on, listening to ${process.env.PORT} PORT`);
})