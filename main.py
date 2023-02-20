import os
from twilio.rest import Client


# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
to_whatsapp_no = os.environ['to_whatsapp_no']
from_whatsapp_no = os.environ['from_whatsapp_no']

client = Client(account_sid, auth_token)

message = client.messages.create(
                              body='Code Pushed to whatsapp-push-message repo',
                              from_='whatsapp:'+from_whatsapp_no,
                              to='whatsapp:'+to_whatsapp_no
                          )

print("Message ID:",message.sid)
