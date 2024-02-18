let billettArray = [];

function bestillingBilett() {
    const film = document.getElementById("film").value;
    const antall = document.getElementById("antall").value;
    const fnavn = document.getElementById("fnavn").value;
    const enavn = document.getElementById("enavn").value;
    const tlfnr = document.getElementById("tlfnr").value;
    const epost = document.getElementById("epost").value;

    // Checking if the fields are empty, if there is one empty you will get an alert from the browser
    if (film === "" || antall === "" || fnavn === "" || enavn === "" || tlfnr === "" || epost === "") {
        alert("Vennligst fyll ut alle feltene.");
        return;
    }

    // Checking if the phone number is a phone number not random letters
    if (tlfnr === "" || isNaN(tlfnr)) {
        document.getElementById("tlfnrError").textContent = "Ugyldig telefonnummer";
        return;
    } else {
        document.getElementById("tlfnrError").textContent = "";
    }

    // Checking if the person typed in @ which means it is an e-mail adress
    if (!epost.includes("@")) {
        document.getElementById("epostError").textContent = "Ugyldig e-postadresse";
        return;
    } else {
        document.getElementById("epostError").textContent = "";
    }

    const billett = {
        film: film,
        antall: antall,
        fnavn: fnavn,
        enavn: enavn,
        tlfnr: tlfnr,
        epost: epost
    };

    billettArray.push(billett);
    visBilettListe();
}
//Function to show the tickets under "Kjøpte billetter"
function visBilettListe() {
    const listeElement = document.getElementById("bilettListe");
    listeElement.innerHTML = "";
    billettArray.forEach(billett => {
        const listItem = document.createElement("li");
        listItem.textContent = `Film: ${billett.film}, Antall: ${billett.antall}, Fornavn: ${billett.fnavn}, Etternavn: ${billett.enavn}, Telefon: ${billett.tlfnr}, E-post: ${billett.epost}`;
        listeElement.appendChild(listItem);
    });
}
//Function to delete all the tickets under "Kjøpte billetter"
function slettBiletter() {
    billettArray = [];
    visBilettListe();
}