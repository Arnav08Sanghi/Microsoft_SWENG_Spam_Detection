document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.local.get(["spamText", "spamResult"], function (data) {
        if (data.spamText && data.spamResult) {
            document.getElementById("inputText").value = data.spamText;
            document.getElementById("result").textContent = data.spamResult;
            document.getElementById("result").style.color = data.spamResult.includes("spam") ? "red" : "green";

            chrome.storage.local.remove(["spamText", "spamResult"]);
        }
    });

    document.getElementById("checkButton").addEventListener("click", async function () {
        let inputText = document.getElementById("inputText").value.trim();
        let resultElement = document.getElementById("result");

        if (!inputText) {
            resultElement.textContent = "Please enter text.";
            resultElement.style.color = "black";
            return;
        }

        try {
            let response = await fetch("https://group11spamapi-bbbjfpdkhpd3g9ev.westeurope-01.azurewebsites.net/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: inputText })
            });

            if (!response.ok) throw new Error(`Server returned ${response.status}`);

            let data = await response.json();
            let message = typeof data === "number"
                ? (data === 1 ? "We think this is spam." : "We think this is real.")
                : (data.spamProbability > 50 ? "We think this is spam." : "We think this is real.");

            resultElement.textContent = message;
            resultElement.style.color = message.includes("spam") ? "red" : "green";
        } catch (error) {
            console.error("Error checking spam:", error);
            resultElement.textContent = "Error checking spam. Please try again.";
            resultElement.style.color = "black";
        }
    });
});