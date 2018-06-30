console.log("loaded js");
var showingMenu = false;

function slideMenu(){
    if(!showingMenu)
        document.getElementById("sidebar").style.right = 0;
    else   
        document.getElementById("sidebar").style.right = -300;
    showingMenu = !showingMenu;
}
