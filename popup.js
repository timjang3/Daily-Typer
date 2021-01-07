
let typing = "";
let time = 0;

function reset(){
  typing = "";
  time = 0;
  chrome.storage.local.set({'reset': "yes"});
  document.getElementById("wpm").innerHTML = 0 + " wpm";
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
    /*
    chrome.storage.local.get('typed', function(data) {
      document.getElementById("test").innerHTML = data.typed;
  
    });
    */
  }
  
  document.addEventListener('DOMContentLoaded', updatePopup);