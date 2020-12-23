exports.recommend = function(json) {
  var date = new Date();
  let message
  var array = json.sort()
  var enabled_messages = array.filter(o => o.enabled === true);

  function nomessage() {
    var nodate_messages = enabled_messages.filter(o => o.air_date != true);
    return nodate_messages[Math.floor(Math.random() * nodate_messages.length)].message_text;
  }


  if (enabled_messages.length) {
    var date_messages = enabled_messages.filter(o => o.air_date === true);
    if (date_messages.length) {
      var todays_messages = enabled_messages.filter(o => o.airdate === date.toLocaleDateString("en", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }));
      if (todays_messages.length) {
        return todays_messages[Math.floor(Math.random() * todays_messages.length)].message_text;

      }else {
        return nomessage();
      }
      if (date_messages.length > 0) {
        console.log(date_messages);
      } else {
        return nomessage();
      }
    } else {
      return nomessage();
    }
  } else {
    throw new Error("No messages");
  }


}
