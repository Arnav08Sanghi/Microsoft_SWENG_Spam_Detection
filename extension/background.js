chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "checkSpam",
        title: "Check for Spam",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (info.menuItemId === "checkSpam") {
        let selectedText = info.selectionText;

        try {
            let response = await fetch("https://group11spamapi-bbbjfpdkhpd3g9ev.westeurope-01.azurewebsites.net/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: selectedText })
            });

            if (!response.ok) throw new Error(`Server returned ${response.status}`);

            let data = await response.json();
            let message = typeof data === "number"
                ? (data === 1 ? "We think this is spam." : "We think this is real.")
                : (data.spamProbability > 50 ? "We think this is spam." : "We think this is real.");

            await chrome.storage.local.set({ spamText: selectedText, spamResult: message });
        } catch (error) {
            console.error("Error checking spam:", error);
            await chrome.storage.local.set({ spamText: selectedText, spamResult: "Error checking spam." });
        }

        chrome.action.openPopup();
    }
});