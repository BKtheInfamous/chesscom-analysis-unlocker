//alert("contenScript entrance");

setTimeout(buttonTestOne, 1000);
//setTimeout(removeChildNodes, 1000);


function removeChildNodes() {
    let parentContainer = document.querySelector('.archived-games-icon-block');
    while (parentContainer.firstChild) {
      parentContainer.removeChild(parentContainer.firstChild);
    }
  }
  

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
        //console.log("button pre inject");
        addButton.appendChild(chooseGame);
        //console.log("button post inject");

        /*let text = document.createElement("div");
        text.textContent = "test "+buttonSum;
        addButton.appendChild(text);*/ 
    
        chooseGame.addEventListener('click', () => {
            chrome.runtime.sendMessage({ action: "getTabUrl" }, (response) => {
                if (response && response.url) {
                    console.log("Current tab URL:", response.url);
                    urlToReturn = response.url;
                }
            });        
            idToReturn = "Button ID: " + chooseGame.id;
            console.log("Button ID: " + chooseGame.id);
            //console.log("Parent element HTML: " + parentElementHTML);
        });
    });

    buttonOneTests.forEach((buttonOneTest) => {
        buttonOneTest.style.cssText = "color: red";
    });
}



/*alert("contenScript entrance")

setTimeout(buttonTestOne, 1000);

function buttonTestOne() {
    const buttonOneTest = document.querySelector(".archived-games-link");
    const addButton = document.querySelector(".archived-games-analyze-cell")
    // let buttonOneTest = document.getElementById("title");  
    if (addButton) {
        console.log("addButton entrance  inject");
        let chooseGame = document.createElement('button');
        chooseGame.textContent = "GAME 1";
        chooseGame.setAttribute('id', "testButtonElementFinder");
        chooseGame.style.cssText ="background-color: brown; color: white";
        console.log("button pre inject");
        addButton.appendChild(chooseGame);
        console.log("button post inject");
    } 
    if (buttonOneTest) {
        buttonOneTest.style.cssText = "color: red";
    }
}*/


/*function createButton() {
    const button = document.createElement("button");
    button.textContent = "Unlock game"; 
    return button;
}

function replaceTDsWithButtons() {
    const tdElements = document.querySelectorAll(".archived-games-analyze-cell");
    console.log("alive");
    tdElements.forEach((td) => {
        const button = createButton();
        button.addEventListener("click", () => {
            // code
        });
    td.parentNode.replaceChild(button, td)
    console.log("replaceNode");
    });
} 

document.addEventListener("DOMContentLoaded", () => {
    replaceTDsWithButtons();
});  */

    /*"background": {
        "service_worker": "background.js"
    },
    "permissions": ["activeTab"],
    "action": {
      "default_popup": "index.html",
      "default_icon": { 
        "16": "bron.jpeg"
      }
    },*/


/* OLD MANIFEST

{
    "manifest_version": 3,
    "name": "Analysis Unlocker v1",
    "description": "Libre moment",
    "version": "0.1.4",
    "background": {
        "service_worker": "background.js"
    },
    "action": {
        "default_popup": "index.html"
    },
    "content_scripts": [
        {
          "js": ["scripts/contentScript.js"],
          "matches": [
            "https://www.chess.com/member/ben-kang",
            "https://www.chess.com/member/*"
          ]
        }
    ]
}
*/


/* 

{
    "manifest_version": 3,
    "name": "Analysis Unlocker v1",
    "description": "Libre moment",
    "version": "0.1.3",
    "action": {
        "default_popup": "index.html"
    },
    "content_scripts": [
        {
          "js": ["scripts/contentScript.js"],
          "matches": [
            "https://www.chess.com/member/ben-kang",
            "https://www.chess.com/member/*"
          ]
        }
    ]
}*/