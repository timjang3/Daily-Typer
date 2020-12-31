
let typing = "";

function updatePopup(){
    chrome.storage.local.get('time', function(data) {
      document.getElementById("wpm").innerHTML = data.time + " wpm";
  
    });
    /*
    chrome.storage.local.get('typed', function(data) {
      document.getElementById("test").innerHTML = data.typed;
  
    });
    */
  }
  
  document.addEventListener('DOMContentLoaded', updatePopup);