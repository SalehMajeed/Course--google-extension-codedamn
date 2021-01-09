window.onload = function () {
  document.getElementById("save").onclick = function () {
    var value = document.getElementById("saveline").value;

    chrome.storage.sync.set({ myline: value }, function () {
      alert("success");
    });
  };
  document.getElementById("get").onclick = function () {
    chrome.storage.sync.get("myline", function (data) {
      alert(data.myline);
    });
  };
};
