const nodemailer=require('nodemailer')


exports.sendMail=(req,res)=>{
const info=req.body
const receiver='wala-25@hotmail.com'; // you put the adrees where you want receive the mail

sendMail(info,receiver)
    .then(()=>{res.status(204).json('')})
    .catch(()=>{res.status(500).json()})

}

function sendMail(info,receiver){
    return new Promise((resolve,reject)=>{
       resolve(true)
       })
}