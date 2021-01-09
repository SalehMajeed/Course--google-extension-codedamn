var messages = [];
var ids = [];
var latest_id;

$(function () {
  setInterval(engine, 2000);
});

function engine() {
  var new_tweets = [];

  $.get("https://twitter.com/i/notifications", function (data) {
    var htmlData = data;
    $data = $(htmlData).find("#stream-items-id").eq(0);
    $data.find(".activity-truncated-tweet").remove();
    $data.find(".activity-supplement").remove();
    $("body").append($data);
    for (i = 0; i < $data.find("li.stream-item").length; i++) {
      ids[i] = $data.find("li.stream-item").eq(i).attr("data-item-id");
      messages[i] = $($data)
        .find("li.stream-item")
        .eq(i)
        .find("div.stream-item-activity-line")
        .text()
        .replace(/\n+/g, "")
        .trim();
    }

    if (latest_id == ids[0]) {
    } else if (latest_id == undefined) {
      var first_run = {
        type: "basic",
        title: "Twitter Notifier",
        message:
          "You may like to check your twitter account for latest updates.",
        contextMessage: "Twitter Notifier",
        buttons: [{ title: "Open Link" }],
        iconUrl: "icon.png",
      };


      chrome.notifications.onButtonClicked.addListener(function () {
        window.open("https://twitter.com/i/notifications");
      });

      chrome.notifications.create(first_run);
      latest_id = ids[0];
    } else if (latest_id != ids[0]) {
      for (j = 0; j < ids[j].length; j++) {
        new_tweets[j] = messages[j];

        if (latest_id == ids[j]) {
          break;
        } else {
          if (messages[j] != "") new_tweets[j] = ids[j];
        }
      }
      latest_id = ids[0];
    }

    if (new_tweets.length == 0) {
    } else {
      for (i = 0; i < new_tweets.length; i++) {
        var my_tweet = {
          type: "basic",
          title: "You got a new Notification On twitter - Twitter notifier",
          message: new_tweets[i],
          contextMessage: "Twitter Notifier",
          buttons: [{ title: "Open Link" }],
          iconUrl: "icon.png",
        };

        chrome.notifications.onButtonClicked.addListener(function () {
          window.open("https://twitter.com/i/notifications");
        });
        chrome.notifications.create(my_tweet);
      }
    }
  });
}
