const http=require('http');
const server=http.createServer((req,res)=>{
  console.log("Hellow")
  res.end("this is my first response");
})
server.listen(process.env.PORT || 3000);
