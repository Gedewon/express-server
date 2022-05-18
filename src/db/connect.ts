import mongoose from "mongoose";
import _default from "../../config/default";
import log from "../logger";

function connect(){
    const {dbUri} =  _default;

    
   return mongoose
   .connect(dbUri,{
       useNewUrlParser: true,
       useUnifiedTopology:true,
   })
   .then(()=>{
    log.info("Database connected")
   })
   .catch((error)=>{
    log.error("db error",error)
   })


}