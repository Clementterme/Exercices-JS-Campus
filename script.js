let menu = document.querySelector(".menu-deroulant");

function deroulerMenu() {
    menu.classList.toggle("cacher");
    menu.classList.toggle("afficher");
}

const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
});

function afficherMessage() {
    let message = document.querySelector("#texte").value;

    let nouvelleDiv = document.createElement("div");

    let contenu = document.createTextNode(message);

    nouvelleDiv.appendChild(contenu);

    form.after(nouvelleDiv);

    let zoneTexte = document.querySelector("#texte");
    zoneTexte.value = "";
}