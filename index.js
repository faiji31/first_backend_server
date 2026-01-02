const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;
app.get('/',(req,res)=>{
      res.send("users server is avilable")
})



const users =[
      {id:1, name:"liam", email:"liam@gmail.com" },
       {id:2, name:"faiji", email:"faiji@gmail.com" },
        {id:3, name:"Akbar", email:"akbar@gmail.com" },
        {id:4,name:"mustaq",email:"mustaq@gmail.com"}
]

app.get('/users',(req,res)=>{
      res.send(users);
})
app.post('/users',(req,res)=>{
      console.log('post method called',req.body)
      const newUser = req.body;
      newUser.id = users.length + 1;
      users.push(newUser)
      res.send(newUser)
})

app.listen(port,()=>{
      console.log(`Server port is avilable in :${port}`)
})