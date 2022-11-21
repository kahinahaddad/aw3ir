window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");


        let dateNaissance = new Date(document.getElementById("date").value); // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#syntaxe
        let dateNaissanceTimestamp = dateNaissance.getTime();

        let nowTimestamp = Date.now()
        const prenom =document.getElementById('Prenom').value;
        const nom =document.getElementById('nom').value;
        const adresse =document.getElementById('Adresse').value;
        const mail = document.getElementById("email").value;
        const date = document.getElementById("date").value;


        if (dateNaissanceTimestamp > nowTimestamp) {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();

            document.querySelector(".modal-title").textContent = "Erreur dans le formulaire"
            document.querySelector(".modal-body").innerHTML = "La date de naissance est incorrecte"
        }

        else if (nom === "" || prenom === "" || adresse === "" || date === "") {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();

            document.querySelector(".modal-title").textContent = "Erreur dans le formulaire"
            document.querySelector(".modal-body").innerHTML = "Tous les champs sont obligatoires"
        }

        else if (validateEmail(mail) == false) {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();

            document.querySelector(".modal-title").textContent = "Erreur dans le formulaire"
            document.querySelector(".modal-body").innerHTML = "Champ Email incorrect !"
        }

        else {
            var myModal = new bootstrap.Modal(document.getElementById('myModal'));
            myModal.show();

            document.querySelector(".modal-title").textContent = "Formulaire validé"
            document.querySelector(".modal-body").innerHTML = `<a href="http://maps.google.com/maps?q=${adresse}">
            <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?markers=${adresse}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg">
            ${adresse}</a>`
        }
    });
};


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
