
let typing = "";
let count = 0;
let shortElapsed =  0;
let cutTime = 0;

window.addEventListener('keydown', myInput, true);

let shortStart2 = 0;

let elapsed = 0;
let start = 0;
let finaltime = 0;
let wpm = 0;

let check = "";


function update(){
    typing = "";
    cutTime = 0;
    wpm = 0;
    chrome.storage.local.set({'time': wpm});
}


document.addEventListener("visibilitychange", function () {
    if(!document.hidden) {
        chrome.storage.local.set({'time': wpm});
    }
  }, false);

  window.addEventListener('load', (event) => {
    if(!document.hidden) {
        chrome.storage.local.set({'time': wpm});
    }
  });

function myInput(event){
    if(typing.length == 0){
        masterStart = window.performance.now();
        start = window.performance.now();
    }
    end = window.performance.now();
    elapsed = end - start;
    start = window.performance.now();

    if(elapsed > 1000){
        cutTime += elapsed;
    }
    
    var input = event.which || event.keyCode;
    if(input != 8){
        let typed = String.fromCharCode(input).toLowerCase();
        typing = typing + typed;
    }
    else{
        typing = typing.slice(0, typing.length - 1);
    }

    masterElapsed = window.performance.now() - masterStart;
    finaltime = masterElapsed - cutTime;
    wpm = Math.round((typing.length/(finaltime/1000/60))/5);

    
    //chrome.storage.local.set({'mtime': finaltime});
    chrome.storage.local.set({'time': wpm});
    //chrome.storage.local.set({'typed': typing});
}
