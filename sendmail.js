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
       transporter=nodemailer.createTransport({
                 host: "vdnh.maaouiwalaeddine.com", //you put your mail Host exp :mychocshop.co.uk
                 port: 465,
                 secure: true,
              auth: {
                  user: "pswdreset@vdnh.maaouiwalaeddine.com", //your SMTP mail: join@mychocshop.co.uk  
                  pass: "",// your mail password
                   },
              tls: {rejectUnauthorized: false},
           })
       transporter.sendMail({
               from:'"ChocolateShop"<pswdreset@vdnh.maaouiwalaeddine.com>', //your mail between < >
               to:receiver,
               subject:"Message from Client",
               html:`<h3> Client name : ${info.name} </h3>
                     <h3> Client BusinessName : ${info.businessName} </h3>
                     <h3> Client email : ${info.email} </h3>
                     <h3> Client phone : ${info.phone} </h3>
                     <h3> Message : </h3> <h4>${info.message}</h4>`})
           .then((r)=>{resolve(r)})
           .catch((err)=>{reject(err)})
       })
}