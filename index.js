exports.recommend = function (json) {
    var date = new Date();
    var array = json.sort();
    var enabled_messages = array.filter((o) => o.enabled === true);

    function nomessage() {
        var nodate_messages = enabled_messages.filter(
            (o) => o.air_date !== true
        );
        return nodate_messages[
            Math.floor(Math.random() * nodate_messages.length)
        ].message_text;
    }

    if (enabled_messages.length) {
        var date_messages = enabled_messages.filter((o) => o.air_date === true);
        if (date_messages.length) {
            var todays_messages = date_messages.filter(function (e) {
                return (
                    new Date(e.airdate).toLocaleDateString("en", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    }) ===
                    date.toLocaleDateString("en", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    })
                );
            });
            if (todays_messages.length) {
                return todays_messages[
                    Math.floor(Math.random() * todays_messages.length)
                ].message_text;
            } else {
                return nomessage();
            }
        } else {
            return nomessage();
        }
    } else {
        throw new Error("No messages");
    }
};
