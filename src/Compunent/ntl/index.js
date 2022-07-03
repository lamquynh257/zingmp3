import React, { useEffect } from "react";

function isSiteOnline(url, callback) {
  // try to load favicon
  var timer = setTimeout(function () {
    // timeout after 5 seconds
    callback(false);
  }, 5000);

  var img = document.createElement("img");
  img.onload = function () {
    clearTimeout(timer);
    callback(true);
  };

  img.onerror = function () {
    clearTimeout(timer);
    callback(false);
  };

  img.src = url + "/favicon.ico";
}

export default function Index() {
  const getStatus = async () => {
    // console.log("Hello");
    isSiteOnline("http://thanhlam.gq", function (found) {
      if (found) {
        // site is online
        console.log("Online");
      } else {
        // site is offline (or favicon not found, or server is too slow)
        console.log("Offline");
      }
    });
  };
  useEffect(() => {
    getStatus();
  });
  return <div>Test</div>;
}
