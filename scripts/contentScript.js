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
        background-color: rgba(0, 0, 0, 0.65);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    h2 {
        color: white;
        font-size: 30px;
        margin-bottom: 10px;
    }

    .loading-bar-container {
        width: 100%;
    }

    .loading-bar {
        width: 100%;
        height: 30px;
        background-color: #fff;
        border-radius: 15px;
        position: relative;
        animation: loading 15s linear infinite;
    }

    @keyframes loading {
        0% { width: 0; }
        100% { width: 100%; }
    }
`;




const styleElement = document.createElement('style');
styleElement.textContent = overlayCSS;
document.head.appendChild(styleElement);

function createOverlay(analysisLink) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    const loadingContainer = document.createElement('div');
    loadingContainer.classList.add('loading-container');
    overlay.appendChild(loadingContainer);

    const loadingHeading = document.createElement('h2');
    loadingHeading.textContent = 'Analysis Loading';
    loadingContainer.appendChild(loadingHeading);

    const loadingBarContainer = document.createElement('div');
    loadingBarContainer.classList.add('loading-bar-container');
    loadingContainer.appendChild(loadingBarContainer);

    const loadingBar = document.createElement('div');
    loadingBar.classList.add('loading-bar');
    loadingBarContainer.appendChild(loadingBar);

    setTimeout(() => {
        document.body.removeChild(overlay);
        window.open(analysisLink, '_blank');
    }, 15000);
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

            let tr = chooseGame.closest('tr');
            let parentOfLinkEle = tr.querySelector(".archived-games-analyze-cell");
            let linkEle = parentOfLinkEle.querySelector('a');
            let analysisLinkRaw = linkEle.getAttribute('href');
            let analysisLink = "https://www.chess.com" + analysisLinkRaw +"?tab=review"
            console.log("Analysis URL: "+analysisLink);
            createOverlay(analysisLink);
            chrome.runtime.sendMessage({ url: analysisLink });
        });
    });

    buttonOneTests.forEach((buttonOneTest) => {
        buttonOneTest.style.cssText = "color: red";
    });
}