var tmr = require('./index');

const json = [
  {
    "id": 0,
    "enabled": false,
    "message_text": "message0withdate",
    "airdate": "12/18/2020",
    "air_date": true
  },
  {
    "id": 1,
    "enabled": true,
    "message_text": "message1",
    "airdate": "",
    "air_date": false
  },
  {
    "id": 2,
    "enabled": false,
    "message_text": "message2",
    "airdate": "12/25/2020",
    "air_date": false
  },{
    "id": 3,
    "enabled": true,
    "message_text": "message3today",
    "airdate": "12/18/2020",
    "air_date": true
  },{
    "id": 4,
    "enabled": false,
    "message_text": "message4",
    "airdate": "10/30/2020",
    "air_date": false
  },{
    "id": 5,
    "enabled": false,
    "message_text": "message5",
    "airdate": "11/2/2020",
    "air_date": true
  }
]

const message = tmr.recommend(json);
console.log(message);
