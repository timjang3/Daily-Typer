chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "hello") {
            chrome.tabs.executeScript(null, {code:"update();"});
            chrome.browserAction.setIcon({path: "Daily Typer.png"});
        }
    }
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if(request.speed < 230 && request.speed > 10){
            let name = "wpmicons/Artboard " + (request.speed - 9) + ".png";
            chrome.browserAction.setIcon({path: name});
        }
        else{
            chrome.browserAction.setIcon({path: "Daily Typer.png"});
        }
});

