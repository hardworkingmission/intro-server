const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const app=express()
const port=process.env.PORT||8000

app.use(cors({origin:true}))
app.use(express.json())

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Hello How are you')
})
const users=[
    {id:'1',name:'shakil',email:'sshakil496@gmail.com',phone:'015777777777'},
    {id:'2',name:'mizan',email:'mizan496@gmail.com',phone:'018777777777'},
    {id:'3',name:'Ango',email:'ango496@gmail.com',phone:'019777777777'},
    {id:'4',name:'naim',email:'naim496@gmail.com',phone:'017777777777'},
]
app.get('/user/:id',(req,res)=>{
    const id=req.params.id
    const user=users.find(user=>user.id==id)
    console.log(id)
    res.send(user);

})


app.get('/users',(req,res)=>{
    if(req.query.id){
        res.send(users.find(user=>user.id==req.query.id))
    }else{
        res.send(users)

    }
    
    console.log(req.query)
    console.log()

})
app.post('/user',(req,res)=>{
    
    const user =req.body
    user.id= users.length+1
    users.push(user)
    console.log('post-user',req.body)
    res.send(user)
})

app.listen(port,()=>{
    console.log('Listening port is',port)
})