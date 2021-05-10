const express = require('express');
const fs = require('fs');
const ejs = require('ejs')
const ytdl = require('ytdl-core')
const bodyParser = require('body-parser')
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
 let url = ''
// parse application/json
app.use(bodyParser.json()) 
app.set('view engine', 'ejs')
app.post('/download',async (req,res,next) =>{

 url = req.body.link
 info(url).then((e)=>{return e}).then((k)=>{

//res.json(k)
res.render(__dirname+'/public/index.ejs',{title: 'Hey',data:k.formats,link:k.formats.url,img:k.videoDetails.thumbnails[3].url})


 })
})


const download =(d)=>{console.log(d)}

async function info(x){ 

let info =  await ytdl.getInfo(x)
return await info;
}

app.get('/',(req, res)=>{
  console.log('got a req')
 res.render(__dirname+'/public/index.ejs',{title: 'Hey',data:[1],img:'a'})
})
app.listen(300,()=>{console.log('started on port 300')})