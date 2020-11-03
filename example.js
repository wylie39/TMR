var tmr = require('./index');

const json = [
  {
    "id": 0,
    "enabled": false,
    "message_text": "message0",
    "airdate": "",
    "air_date": false
  },
  {
    "id": 1,
    "enabled": false,
    "message_text": "message1",
    "airdate": "",
    "air_date": false
  },
  {
    "id": 2,
    "enabled": true,
    "message_text": "message2",
    "airdate": "12/25/2020",
    "air_date": false
  },{
    "id": 3,
    "enabled": false,
    "message_text": "message3",
    "airdate": "",
    "air_date": false
  },{
    "id": 4,
    "enabled": false,
    "message_text": "message4",
    "airdate": "10/30/2020",
    "air_date": false
  },{
    "id": 5,
    "enabled": true,
    "message_text": "message5",
    "airdate": "11/2/2020",
    "air_date": true
  }
]

const message = tmr.recommend(json);
console.log(message);
