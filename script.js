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

let galerie = document.getElementById("galerie");

function grille() {
    galerie.classList.remove("colonne");
    galerie.classList.add("grille");
}

function colonne() {
    galerie.classList.remove("grille");
    galerie.classList.add("colonne");
}

function ajouterImage() {
    let image = document.getElementById("ajouterImage").value;

    let nouvelleImage = document.createElement("img");

    nouvelleImage.src = image;

    galerie.appendChild(nouvelleImage);

    let zoneAjoutImage = document.getElementById("ajouterImage");
    zoneAjoutImage.value = "";
}