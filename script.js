const users = [{ titre: "Connexion Wi-Fi instable", categorie: "Materiel", priorite: "Haute", description: "Installer un logiciel sur le poste." },
{ id: 1, titre: "Connexion Wi-Fi instable", categorie: "Reseau", priorite: "Haute", description: "Installer un logiciel sur le poste." },
{ id: 2, titre: "Connexion Wi-Fi instable", categorie: "Reseau", priorite: "Haute", description: "Installer un logiciel sur le poste." }];

modifier = false;
let indexCarte;

let btn = document.getElementById("btn");
btn.addEventListener("click", function () {

    let Titre = document.getElementById("Titrepro").value;
    let  catego = document.getElementById("categorie").value;
    let priort = document.getElementById("priorite").value;
    let descri = document.getElementById("description").value;

    if (Titre == "" || catego == "" || priort == "" || descri == "") {
        alert("enter les information dans le formulaire");
        return;
    }
    else {
        let user = {
            titre: Titre,
            categorie: catego,
            priorite: priort,
            description: descri
        };

        if (modifier == true) {
            users.splice(indexCarte, 1, user);
            modifier = false;
        } else {
            users.push(user);
        }

        AffecherCart();
        document.querySelectorAll("input").forEach(input => {
            input.value = "";
        });

    }

});
function AffecherCart() {

    let section = document.getElementById("les-articeles");
    section.textContent = "";

    for (let i = 0; i < users.length; i++) {
        let cart = document.createElement("article");
        cart.className = "cart";

        let headcart =document.createElement("div");
            headcart.className ="headcart";
        let numtecket = document.createElement("p");
                numtecket.className ="tecket";
                numtecket.textContent="HD-00"+(i+1);
        let imagewifi = document.createElement("img");
             imagewifi.className = "icons";
             imagewifi.setAttribute("src", "assets/wifi.png");

        let imagelogi = document.createElement("img");
              imagelogi.className = "icons";
              imagelogi.setAttribute("src", "assets/logiciel.png");
             
        let imagemater = document.createElement("img");
            imagemater.className = "icons";
            imagemater.setAttribute("src", "assets/material.webp");




        let carttitre = document.createElement('h2');
        carttitre.className = 'carttitre';
        carttitre.textContent = users[i].titre;
        let description = document.createElement("p");
        description.className = "description";
        description.textContent = users[i].description;
        let boxproandcat = document.createElement("div");
        boxproandcat.className = "boxproandcat";
        let categorie = document.createElement("h5");
        categorie.className = "categorie";
        categorie.textContent = users[i].categorie;
        let priorite = document.createElement("h5");
        priorite.textContent = users[i].priorite;
        let buttonbox = document.createElement("div");
        buttonbox.className = "buttonbox";
        let line = document.createElement("div");
        line.className = "line"
        let modifie = document.createElement("button");
        modifie.className = "btn-modifie";
        modifie.textContent = "modifie";
        let suprem = document.createElement("button");
        suprem.className = "btn-suprem";
        suprem.textContent = "supreme";

        let catego = users[i].categorie;
        switch (catego) {
            case "Materiel" :
            headcart.appendChild(imagemater);
            break;
            case "Reseau":
                headcart.appendChild(imagewifi)
                break;
            case "Logiciels":
                headcart.appendChild(imagelogi);
                break;
        }
        let prio = users[i].priorite;
        switch (prio) {
            case "Haute":
                priorite.className = "haute";
                break;
            case "Moyenne":
                priorite.className = "moyenne";
                break;
            case "Basse":
                priorite.className = "basse";
                break;
        }
        
        
        headcart.appendChild(numtecket);
        cart.appendChild(headcart);
        cart.appendChild(carttitre);
        cart.appendChild(description);
        boxproandcat.appendChild(categorie);
        boxproandcat.appendChild(priorite);
        cart.appendChild(boxproandcat);
        cart.appendChild(line);
        buttonbox.appendChild(modifie);
        buttonbox.appendChild(suprem);
        cart.appendChild(buttonbox);
        section.appendChild(cart);


        suprem.addEventListener("click", function () {
            users.splice(i, 1);
            AffecherCart();

        });
        modifie.addEventListener("click", function () {

            document.getElementById("Titrepro").value = users[i].titre;
            document.getElementById("categorie").value = users[i].categorie;
            document.getElementById("priorite").value = users[i].priorite;
            document.getElementById("description").value = users[i].description;

            modifier = true;
            indexCarte = i;

        });
    }
    let demmand = document.getElementById("nbr-demandes");
    demmand.textContent = users.length + " demandes";
}


AffecherCart();