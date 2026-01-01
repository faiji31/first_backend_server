const express = require("express")
const app = express()
const port = 5000
app.get('/',(req,res)=>{
      res.send("users server is avilable")
})

const users =[
      {id:1, name:"liam", email:"liam@gmail.com" },
       {id:2, name:"faiji", email:"faiji@gmail.com" },
        {id:3, name:"Akbar", email:"akbar@gmail.com" }
]

app.get('/users',(req,res)=>{
      res.send(users);
})

app.listen(port,()=>{
      console.log(`Server port is avilable in :${port}`)
})