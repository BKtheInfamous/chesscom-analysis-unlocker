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
            let currentUrl = window.location.href;
            console.log("URL: "+currentUrl);
            chrome.runtime.sendMessage({ url: currentUrl });
        });
    });

    buttonOneTests.forEach((buttonOneTest) => {
        buttonOneTest.style.cssText = "color: red";
    });
}