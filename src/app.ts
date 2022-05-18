import express from "express";
import config from "../config/default";

const {port ,host ,dbUri} = config;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(port,host,()=>{
    console.log(`Server listing at http://${host}:${port}`);
})