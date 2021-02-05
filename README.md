
```                                                                          
                                                                          
TTTTTTTTTTTTTTTTTTTTTTTMMMMMMMM               MMMMMMMMRRRRRRRRRRRRRRRRR   
T:::::::::::::::::::::TM:::::::M             M:::::::MR::::::::::::::::R  
T:::::::::::::::::::::TM::::::::M           M::::::::MR::::::RRRRRR:::::R 
T:::::TT:::::::TT:::::TM:::::::::M         M:::::::::MRR:::::R     R:::::R
TTTTTT  T:::::T  TTTTTTM::::::::::M       M::::::::::M  R::::R     R:::::R
        T:::::T        M:::::::::::M     M:::::::::::M  R::::R     R:::::R
        T:::::T        M:::::::M::::M   M::::M:::::::M  R::::RRRRRR:::::R 
        T:::::T        M::::::M M::::M M::::M M::::::M  R:::::::::::::RR  
        T:::::T        M::::::M  M::::M::::M  M::::::M  R::::RRRRRR:::::R 
        T:::::T        M::::::M   M:::::::M   M::::::M  R::::R     R:::::R
        T:::::T        M::::::M    M:::::M    M::::::M  R::::R     R:::::R
        T:::::T        M::::::M     MMMMM     M::::::M  R::::R     R:::::R
      TT:::::::TT      M::::::M               M::::::MRR:::::R     R:::::R
      T:::::::::T      M::::::M               M::::::MR::::::R     R:::::R
      T:::::::::T      M::::::M               M::::::MR::::::R     R:::::R
      TTTTTTTTTTT      MMMMMMMM               MMMMMMMMRRRRRRRR     RRRRRRR
                                                                          
                                                                          
   ```                                                                       
                                                                          
                                                                          
                                                                          
                                                            
                                                                       

# Tiny-Message-Recommender
TMR or Tiny Message Recommender is a small package for recommending text from a json file.

[![NPM](https://nodei.co/npm/@wylie39/tmr.png)](https://npmjs.org/package/@wylie39/tmr)

## How to

### Install
npm i @wylie39/tmr

TMR takes a json object like the following:
```
{
    "id": A unique number for the message,
    "enabled": True or False should we show this message,
    "message_text": " the message itself ",
    "airdate": "only show the message on this date, MM/DD/YYYY",
    "air_date": True or False only recommend on the date above,
}
```
Here’s a example with 3 messages:
```
[
  {
    "id": 0,
    "enabled": true,
    "message_text": "message 0",
    "airdate": "",
    "air_date": false
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
    "enabled": true,
    "message_text": "message2",
    "airdate": "12/25/2020",
    "air_date": true
  }
]
```

Here’s a full example:
```
const tmr = require('@wylie39/tmr');


const json = [
  {
    "id": 0,
    "enabled": true,
    "message_text": "message 0",
    "airdate": "",
    "air_date": false
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
    "enabled": true,
    "message_text": "message2",
    "airdate": "12/25/2020",
    "air_date": true
  }
]

const message = tmr.recommend(json);

console.log(message);
```
This will recommend one of the messages and log it to the console.

## Behaviors

If a message has a date and is enabled it will get recommend first
If there are multiple dates it will pick one at random
If there are no messages with dates it will use one that has no date and is enabled
if there no enabled messages it will throw an error

The date is captured from the users computer and compared to the one in the json without time-zone checking.

## Tests
Run NPM test.
