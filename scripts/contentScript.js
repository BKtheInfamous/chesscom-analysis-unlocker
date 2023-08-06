//alert("contenScript entrance");
setTimeout(buttonTestOne, 1000);  

let buttonSum = 0;
let idToReturn = "";
let urlToReturn = "";

function buttonTestOne() {
    const buttonOneTests = document.querySelectorAll(".archived-games-link");
    const addButtons = document.querySelectorAll(".archived-games-icon-block");

    addButtons.forEach((addButton) => {
        buttonSum++;
        while (addButton.firstChild) {
            addButton.removeChild(addButton.firstChild);
        }
        let chooseGame = document.createElement('button');
        chooseGame.textContent = "unlock analysis "+ buttonSum;
        chooseGame.setAttribute('id', "testButtonElementFinder"+buttonSum);
        chooseGame.classList.add("log-button-link");
        chooseGame.style.cssText = "background-color: brown; color: white";
        addButton.appendChild(chooseGame);
    
        chooseGame.addEventListener('click', () => {
            chrome.runtime.sendMessage({ action: "getTabUrl" }, (response) => {
                if (response && response.url) {
                    console.log("Current tab URL:", response.url);
                    urlToReturn = response.url;
                }
            });
            idToReturn = chooseGame.id;
            console.log("Button ID: " + chooseGame.id);
            // chrome.runtime.sendMessage({ action: "sendDataToPython", id: idToReturn, url: urlToReturn });
            console.log("URL ID: " + urlToReturn);
            chrome.runtime.connect({ name: "contentScriptToBackground" }).postMessage({ action: "sendDataToPython", idToReturn, urlToReturn });
        });
    });

    buttonOneTests.forEach((buttonOneTest) => {
        buttonOneTest.style.cssText = "color: red";
    });
}