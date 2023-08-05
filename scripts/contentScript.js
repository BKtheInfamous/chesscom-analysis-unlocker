setTimeout(buttonTestOne, 100);

function buttonTestOne() {
    const buttonOneTest = document.querySelector(".archived-games-link");
    const addButton = document.querySelector(".archived-games-analyze-cell")
    // let buttonOneTest = document.getElementById("title");  
    if (addButton) {
        console.log("addButton entrance  inject");
        let chooseGame = document.createElement('button');
        chooseGame.textContent = "GAME 1";
        chooseGame.style.cssText ="background-color: brown; color: white";
        console.log("button pre inject");
        addButton.appendChild(chooseGame);
        console.log("button post inject");
    } 
    if (buttonOneTest) {
        buttonOneTest.style.cssText = "color: red";
    }
}


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