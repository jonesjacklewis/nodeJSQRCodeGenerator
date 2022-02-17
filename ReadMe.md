# NodeJS QR Code Generator

- [NodeJS QR Code Generator](#nodejs-qr-code-generator)
  - [Technologies](#technologies)
  - [Methods of Use](#methods-of-use)
    - [Web Use](#web-use)
    - [API](#api)


## Technologies
- NodeJS
- Express
- EJS
- API

## Methods of Use

### Web Use

1. Run ```npm start``` in project directory.
2. Navigate to ```localhost:30000/``` in the browser.
3. Enter a URL in the input box a click submit to generate a QR code.

### API

- Below example is written using Python

1. Run ```npm start``` in project directory.
2. See sample code below

```python

import requests
import json

endpoint = "http://localhost:3000/"
data = {
    "url":"https://www.google.com/"
}

r = requests.post(endpoint, data=data)

content = json.loads(r.content)

print(content) # {'data': 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.google.com/'}

```