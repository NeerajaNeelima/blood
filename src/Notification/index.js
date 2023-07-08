const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const WebSocketServer = require('ws');
const { PORT, MONGODB_URI } = require('./config.js')
const server = require('http').createServer();
const wss = new WebSocketServer.Server({server});
const axios=require("axios")
const {createProxyMiddleware}=require('http-proxy-middleware')
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use((req, res, next) => {
    
  res.header("Allow-Control-Allow-Origin",true);
    next();
  });

app.use(express.json());

var corsOptions = {
  Credential: true,
  
  optionsSuccessStatus: 200,
  changeOrigin:true,
};

app.use(cors(corsOptions));

mongoose.connect(MONGODB_URI)
.then(()=>{console.log("mongoodb connected")})
.catch((e)=>{console.log(e)})
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

wss.on("connection",async (ws) => {
    
  const changeStream = mongoose.connection.collection('data').watch();
    if(changeStream){console.log(changeStream.value)}    
    changeStream.on('change', (change) => {
        console.log("Database Changes Occured")
        if (change.operationType === 'insert') {
            console.log('New insertion:', change.fullDocument);
            getallusers()
            async function getallusers() {
                try {
                await axios.get('http://localhost:4011/api/donars',{timeout:10000})                
                  .then(response =>{
                    const users = response.data.data.users
                    const emails = users.map(user => user.email);
                    console.log(emails)
                    emails.forEach(email =>{
                    console.log('sending msg to user ',email);
                    Sendmail(email,change.fullDocument)
                    })
                  })
                 .catch(error =>{
                    console.log(error)
                    console.log('error message',error.message)
                    console.log('error status',error.status)
                  })
                  
                } catch (error) {
                  console.error('Error:', error);
                  
                  
                }
              }
            
              
              
        }    
    });
})

const Sendmail = (req,res) =>{
    const { userEmail,details } = req.body;
    console.log("sending mails")
    let config = {
        service : 'gmail',
        auth : {
            user: "023neeraja@gmail.com",
            pass: "vsjvmijivxtamxan"
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "salted",
        product : {
            name: "Blood Donation",
            link : 'https://mailgen.js/'
        }
    })

    let response = {
        body: {
            title : "Emergency Blood needed",
            intro: details,
            outro: "Are you available",
            signature: false,
        }
    }

    let mail = MailGenerator.generate(response)

    let message = {
        from : "023neeraja@gmail.com",
        to : userEmail,
        subject: "New posted data",
        html: mail
    }

    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        })
    }).catch(error => {
        return res.status(500).json({ error })
    })

}

server.listen(PORT, function () {
    console.log(`im listening at ${PORT}`);
});
