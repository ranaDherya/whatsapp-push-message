const accountSid = process.env.account_sid;
const authToken = process.env.auth_token;
const from = process.env.from_whatsapp_no;
const to = process.env.to_whatsapp_no;
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    from: `whatsapp:${from}`,
    body: "A new commit to your github repo",
    to: `whatsapp:${to}`,
  })
  .then((message) => console.log(message.sid));

// const accountSid = 'ACabc7cda8ea71e834d0c7434284c3256b'; 
// const authToken = '[Redacted]'; 
// const client = require('twilio')(accountSid, authToken); 
 
// client.messages 
//       .create({ 
//          body: 'Your appointment is coming up on July 21 at 3PM', 
//          from: 'whatsapp:+14155238886',       
//          to: 'whatsapp:+919926073186' 
//        }) 
//       .then(message => console.log(message.sid)) 
//       .done();
