
let typing = "";
let time = 0;

function reset(){
  typing = "";
  time = 0;
  chrome.storage.local.set({'reset': "yes"});
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    if(url == "chrome://newtab/"){
      document.getElementById("wpm").innerHTML = "Unavailable";
    }
    else{
      document.getElementById("wpm").innerHTML = 0 + " wpm";
    }
    
   });
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('link');
  
  link.addEventListener('click', function() {
      reset();
      chrome.runtime.sendMessage({
        msg: "hello"
    });
  });
});

function updatePopup(){
    chrome.storage.local.get('time', function(data) {
      time = data.time;
      document.getElementById("wpm").innerHTML = data.time + " wpm";
    });
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
      var url = tabs[0].url;
      if(url == "chrome://newtab/"){
        document.getElementById("wpm").innerHTML = "Unavailable";
        chrome.browserAction.setIcon({path: "Daily TyperN.png"});
      }
     });
    /*
    chrome.storage.local.get('typed', function(data) {
      document.getElementById("test").innerHTML = data.typed;
  
    });
    */
  }
  
  document.addEventListener('DOMContentLoaded', updatePopup);