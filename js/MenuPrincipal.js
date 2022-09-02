function mouseIsOverMainMenuButton(){
    document.getElementById("startButtonImage").src= "../images/greenStartButton.png";
    document.getElementById("backgroundMainMenu").style.backgroundImage = "url(../images/hellfire_realm.jpg)";
}
function mouseIsOutOfMainMenuButton(){
    document.getElementById("startButtonImage").src= "../images/start.png";
    document.getElementById("backgroundMainMenu").style.backgroundImage = "url(../images/castle.jpg)";
}