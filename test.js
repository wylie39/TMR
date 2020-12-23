var expect = require("chai").expect;
var tmr = require('./index');

describe("Tiny Message Recommender", function() {
  it("Recommend one message", function() {
    const json = [{
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
      }, {
        "id": 3,
        "enabled": false,
        "message_text": "message3",
        "airdate": "",
        "air_date": false
      }, {
        "id": 4,
        "enabled": false,
        "message_text": "message4",
        "airdate": "10/30/2020",
        "air_date": false
      }, {
        "id": 5,
        "enabled": false,
        "message_text": "message5",
        "airdate": "",
        "air_date": false
      }
    ]
    const message = tmr.recommend(json);
    expect(message).to.equal("message2");
  });
  it("Recommend no messages", function() {
    const json = [{
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
        "enabled": false,
        "message_text": "message2",
        "airdate": "12/25/2020",
        "air_date": false
      }, {
        "id": 3,
        "enabled": false,
        "message_text": "message3",
        "airdate": "",
        "air_date": false
      }, {
        "id": 4,
        "enabled": false,
        "message_text": "message4",
        "airdate": "10/30/2020",
        "air_date": false
      }, {
        "id": 5,
        "enabled": false,
        "message_text": "message5",
        "airdate": "",
        "air_date": false
      }
    ]
    expect(function() {
      const message = tmr.recommend(json);
    }).to.throw(Error);
  });
  it("Recommend one message for today", function() {
    const json = [{
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
        "enabled": false,
        "message_text": "message2",
        "airdate": "12/25/2020",
        "air_date": false
      }, {
        "id": 3,
        "enabled": false,
        "message_text": "message3",
        "airdate": "",
        "air_date": false
      }, {
        "id": 4,
        "enabled": true,
        "message_text": "message4",
        "airdate": new Date().toLocaleDateString(),
        "air_date": true
      }, {
        "id": 5,
        "enabled": false,
        "message_text": "message5",
        "airdate": "",
        "air_date": false
      }
    ]
    const message = tmr.recommend(json);
    expect(message).to.equal("message4");
  });
  it("Recommend 3 messages", function() {
    const json = [{
        "id": 0,
        "enabled": false,
        "message_text": "message0",
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
        "air_date": false
      }, {
        "id": 3,
        "enabled": false,
        "message_text": "message3",
        "airdate": "",
        "air_date": false
      }, {
        "id": 4,
        "enabled": false,
        "message_text": "message4",
        "airdate": new Date().toLocaleDateString(),
        "air_date": false
      }, {
        "id": 5,
        "enabled": true,
        "message_text": "message5",
        "airdate": "",
        "air_date": false
      }
    ]
    const message = tmr.recommend(json);
    expect(message).to.be.oneOf(["message1", "message2", "message5"]);

  });
});
