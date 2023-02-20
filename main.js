require("dotenv").config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const from = process.env.FROM_WHATSAPP_NO;
const to = process.env.TO_WHATSAPP_NO;
const client = require("twilio")(`${accountSid}`, `${authToken}`);

client.messages
  .create({
    from: `whatsapp:${from}`,
    body: "A new commit to your github repo",
    to: `whatsapp:${to}`,
  })
  .then((message) => console.log(message.sid));
