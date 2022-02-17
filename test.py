import requests
import json

endpoint = "http://localhost:3000/"
data = {
    "url":"https://www.google.com/"
}

r = requests.post(endpoint, data=data)

content = json.loads(r.content)

print(content) # {'data': 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.google.com/'}