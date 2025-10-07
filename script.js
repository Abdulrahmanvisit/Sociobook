var settingsMenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");

function settingsMenuToggle(){
    console.log("Toggling settings menu");
    if(settingsMenu) settingsMenu.classList.toggle("settings-menu-height");
}

if(darkBtn){
    darkBtn.onclick = function(){
        console.log("Toggling dark mode");
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");

        if(localStorage.getItem("theme") === "light"){
            localStorage.setItem("theme", "dark");
            console.log("Set theme to dark");
        } else {
            localStorage.setItem("theme", "light");
            console.log("Set theme to light");
        }
    };
}

console.log("Initial theme:", localStorage.getItem("theme"));
if (localStorage.getItem("theme") === "light"){
    if(darkBtn) darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    console.log("Applied light theme");
} else if(localStorage.getItem("theme") === "dark"){
    if(darkBtn) darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    console.log("Applied dark theme");
} else {
    localStorage.setItem("theme", "light");
    console.log("Set default theme to light");
}

function loadMore(){
    alert("Loading more posts... (This is a demo - in a real app, this would fetch more content)");
}

function addFriend(){
    alert("Friend request sent! (Demo functionality)");
}

function sendMessage(){
    alert("Opening chat... (Demo functionality)");
}