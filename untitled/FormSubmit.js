
var research = "";
function validateForm()
{

 window['research'] = document.forms["barRechercheForm"]["q"].
        if(research == ""){
                alert("vous devez rechercher quelque chose");
        }else {

                window.open("Recherchetransport.html" );

        }

}
validateForm();
function backgroundChange() {


    if(research == "south korea" || research == "korea"){

        document.getElementById("hero2").style.backgroundImage= `url('Pictures/${research}.png')`;

    }


}