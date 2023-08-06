//alert("contenScript entrance");
setTimeout(buttonTestOne, 1000);  

let buttonSum = 0;

function buttonTestOne() {
    const buttonOneTests = document.querySelectorAll(".archived-games-link");
    const addButtons = document.querySelectorAll(".archived-games-icon-block");

    addButtons.forEach((addButton) => {
        buttonSum++;
        while (addButton.firstChild) {
            addButton.removeChild(addButton.firstChild);
        }
        let chooseGame = document.createElement('button');
        chooseGame.textContent = "unlock analysis";
        chooseGame.setAttribute('id', "testButtonElementFinder"+buttonSum);
        chooseGame.classList.add("log-button-link");
        chooseGame.style.cssText = "background-color: brown; color: white";
        addButton.appendChild(chooseGame);
    
        chooseGame.addEventListener('click', () => {
            let tr = chooseGame.closest('tr');
            let parentOfLinkEle = tr.querySelector(".archived-games-analyze-cell");
            let linkEle = parentOfLinkEle.querySelector('a');
            let analysisLinkRaw = linkEle.getAttribute('href');
            let analysisLink = "https://www.chess.com" + analysisLinkRaw +"?tab=review"
            console.log("Analysis URL: "+analysisLink);
            chrome.runtime.sendMessage({ url: analysisLink });
        });
    });

    buttonOneTests.forEach((buttonOneTest) => {
        buttonOneTest.style.cssText = "color: red";
    });
}