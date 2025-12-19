import express from 'express';
import axios from 'axios';
const app=express();
app.use(express.json());
app.post('/webhook',async(req,res)=>{
 await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
 {chat_id:process.env.SUPPORT_CHAT,text:JSON.stringify(req.body)});
 res.sendStatus(200);
});
app.listen(3000);
