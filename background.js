chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.msg === "hello") {
            chrome.tabs.executeScript(null, {code:"update();"});
        }
    }
);