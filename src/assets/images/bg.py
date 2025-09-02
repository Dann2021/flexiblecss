import os 
import requests

cle = "AyXjSEN99Pn9DKPcoM4AqQPh"


response = requests.post(
    'https://api.remove.bg/v1.0/removebg',
    files={'image_file': open('ticket.jpg', 'rb')},
    data={'size': 'auto'},
    headers={'X-Api-Key': 'AyXjSEN99Pn9DKPcoM4AqQPh'},
)
if response.status_code == requests.codes.ok:
    with open('ticket2.png', 'wb') as out:
        out.write(response.content)
else:
    print("Error:", response.status_code, response.text)

