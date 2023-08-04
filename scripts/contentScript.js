const buttonOneTest = document.querySelector(".archived-games-link");

if (buttonOneTest) {
    buttonOneTest.setAttribute("id", "TESTBUTTON");
    buttonOneTest.style.cssText = "color: red";
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