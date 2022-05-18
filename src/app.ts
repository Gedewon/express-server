import express from "express";
import config from "../config/default";
import log from "./logger";

const {port ,host ,dbUri} = config;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.listen(port,host,()=>{
    // since node js is single traded and console.log will block IO service so
    // try using logger's as much as possible 
    log.info(`Server listing at http://${host}:${port}`);
})