const accountSid = "ACabc7cda8ea71e834d0c7434284c3256b";
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
