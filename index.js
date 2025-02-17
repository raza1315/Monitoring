const express=require("express");
const {doHeavyTask}=require('./heavyTask');
const app=express();
app.use(express.json());
const port=4000;
app.listen(port,()=>{
console.log('server is running on port:',port);
})
app.get('/',(req,res)=>{
res.status(200).json("Server is Up and Running...");
})
app.get("/heavytask",async(req,res)=>{
try{
const timeTaken=await doHeavyTask();
console.log(`time taken is : ${timeTaken}`);
res.status(200).json("Success...");
}
catch(err){

}
})
