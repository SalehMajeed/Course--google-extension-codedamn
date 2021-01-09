chrome.browserAction.onClicked.addListener(function () {
  //   chrome.tabs.create({ url: "https://google.com" }, callback);
  //   chrome.tabs.executeScript(null, { file: "script.js" }); //TABID
  var information = "12345";
  chrome.tabs.executeScript(
    null,
    {
      code: "var information =" + information + "",
    },
    function () {
      chrome.tabs.executeScript(null, { file: "script.js" });
    }
  ); //TABID
});

function callback(data) {
  console.log(data);
}
