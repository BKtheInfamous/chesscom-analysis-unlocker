//alert("contenScript entrance");
setTimeout(buttonTestOne, 1000);  

let buttonSum = 0;

const overlayCSS = `
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .loading-bar {
        width: 200px;
        height: 20px;
        background-color: #fff;
        border-radius: 10px;
        position: relative;
        animation: loading 5s linear infinite;
    }

    @keyframes loading {
        0% { width: 0; }
        100% { width: 100%; }
    }
`;

const styleElement = document.createElement('style');
styleElement.textContent = overlayCSS;
document.head.appendChild(styleElement);

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const loadingBar = document.createElement('div');
    loadingBar.classList.add('loading-bar');
    overlay.appendChild(loadingBar);

    setTimeout(() => {
        document.body.removeChild(overlay);
        window.location.reload(); 
    }, 5000); // adjusment here
}


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
            createOverlay();

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