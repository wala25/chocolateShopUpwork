const express=require('express')
const compression=require('compression')
app=express()
app.use(compression())
app.use(express.json())
app.use( express.static(__dirname+'/dist/chocolate-shop'))
app.post('/api/postform', (req,res)=>{
    console.log(req.body)
})
app.get('/*',(req,res)=>{res.sendFile('index.html',{root:'./dist/chocolate-shop/'})})

const port=3000;
app.listen(port,()=>{console.log('running on port '+port)})