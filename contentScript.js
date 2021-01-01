let sentence = "This is a test!";
let typing = "";
let count = 0;
let shortElapsed =  0;
let cutTime = 0;

window.addEventListener('keydown', myInput, true);
//document.addEventListener(update);

let shortStart2 = 0;
let check = true;

let elapsed = 0;
let start = 0;
let finaltime = 0;
let wpm = 0;

let reset = "";
/*
function update(){
    chrome.storage.local.get('reset', function(data) {
        reset = data.reset;

        if(reset === "yes"){
            typing = "";
            cutTime = 0;
            chrome.storage.local.set({'time': 0});
            chrome.storage.local.set({'reset': "no"});
        }
    });
}
*/
function myInput(event){
    if(typing.length == 0){
        masterStart = window.performance.now();
        start = window.performance.now();
    }
    end = window.performance.now();
    elapsed = end - start;
    start = window.performance.now();

    if(elapsed > 750){
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
