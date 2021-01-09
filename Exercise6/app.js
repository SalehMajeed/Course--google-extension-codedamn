document
  .getElementById("startRecording")
  .addEventListener("click", recordClick, false);

function recordClick() {
  chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], access);
}

function access(id) {
  navigator.webkitGetUserMedia(
    {
      audio: false,
      video: {
        mandatory: {
          chromeMediaSource: "desktop",
          chromeMediaSourceId: id,
        },
      },
    },
    startStream,
    failed_stream
  );
}

function startStream(stream) {
  console.log("start");
  var video = document.getElementById("screenMain");
  video.srcObject = stream;
  stream.onended = function () {
    console.log("video");
  };
}

function failed_stream() {
  console.log("err");
}
