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

    let nouvelleDiv = document.createElement("div");

    nouvelleDiv.style.display = "flex";
    nouvelleDiv.style.flexDirection = "column";

    let btnSupprimer = document.createElement("button");

    btnSupprimer.textContent = "Supprimer";

    btnSupprimer.addEventListener("click", function () {
        this.remove();
        nouvelleDiv.remove();
    });

    galerie.appendChild(nouvelleDiv);
    nouvelleDiv.appendChild(nouvelleImage);
    nouvelleDiv.appendChild(btnSupprimer);

    let zoneAjoutImage = document.getElementById("ajouterImage");
    zoneAjoutImage.value = "";
}