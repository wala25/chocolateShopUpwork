const express=require('express')
const compression=require('compression')
const sendmail=require('./sendmail')
app=express()
app.use(compression())
app.use(express.json())

app.post('/api/postform', sendmail.sendMail)


app.use( express.static(__dirname+'/dist/chocolate-shop'))
app.get('/*',(req,res)=>{res.sendFile('index.html',{root:'./dist/chocolate-shop/'})})

const port=3000;
app.listen(port,()=>{console.log('running on port '+port)})