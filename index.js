exports.recommend = function(json) {
  let message
  let nomessage;
  let count = 0;

  var array = json.sort(() => Math.random() - 0.5)

  function getmessage() {
    if (count >= array.length) {
      nomessage = true
      return;
    }
    else {
      message = array[count]
      if (message.enabled == false) {
        count++
        getmessage()
      }
      if (message.air_date == true) {
        if (message.airdate != new Date().toLocaleDateString()) {
          count++
          getmessage()
        }
      }
    }
  }



  getmessage()

  if (nomessage == true) {
    return;
    }
  else {
    return message.message_text;

  }
}
