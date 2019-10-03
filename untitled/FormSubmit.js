

function validateForm()
{
    var research = "";
    research = document.forms["barRechercheForm"]["q"].value;
        if(research == ""){
                alert("vous devez rechercher quelque chose");
        }else {

                localStorage.research = research;
                window.open("Recherchetransport.html");

        }

}

function backgroundChange() {

    var research = localStorage.research;


        document.getElementById("header1").innerText = research;
        document.getElementById("hero2").src = `Pictures/${research}.png`;



}