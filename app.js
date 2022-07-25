const express=require('express')
const compression=require('compression')
app=express()
app.use(compression())
app.use( express.static(__dirname+'/dist/chocolate-shop'))
app.get('/*',(req,res)=>{res.sendFile('F:/run app/dist/walaeddine/index.html')})

const port=3000;
app.listen(port,()=>{console.log('running on port '+port)})