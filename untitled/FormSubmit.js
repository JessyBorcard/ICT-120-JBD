
var global_research = "";
function validateForm()
{
    var research = "";
    research = document.forms["barRechercheForm"]["q"].value;
        if(research === ""){
                alert("vous devez rechercher quelque chose");
        }else {

                localStorage.research = research;
                window.open("Recherchetransport.html");

        }

}

function backgroundChange() {

    var research = localStorage.research;
    global_research = research;

        document.getElementById("header1").innerText = research;
        document.getElementById("hero2").style.backgroundImage = `url("Pictures/${research}.png")`;



}
function backgroundChangeSearchBoxin(){

    document.forms["barRechercheForm"]["q"].style.backgroundImage = "url('')";

}
function backgroundChangeSearchBoxOut(){

    document.forms["barRechercheForm"]["q"].style.backgroundImage = "url('Pictures/search.svg')";

}
function originPlaceChangeText() {
    document.getElementById("origin_place1").innerText = document.forms["originendplaceresearch"]["qoriginplace"].value;
    document.getElementById("origin_place2").innerText = document.forms["originendplaceresearch"]["qoriginplace"].value;
}
function endPlaceChangeText() {
    document.getElementById("end_place1").innerText = document.forms["originendplaceresearch"]["qendplace"].value;
    document.getElementById("end_place2").innerText = document.forms["originendplaceresearch"]["qendplace"].value;
}
function resultsShow() {
    var list_air_lines = [["Google Flights", "googleflights", "https://www.google.com/flights"], ["Korean Air", "koreanair", "https://www.koreanair.com"], ["Easy Jet", "easyjet", "https://www.easyjet.com"], ["Air France", "airfrance", "https://www.airfrance.co.uk/"], ["LuftHansa", "lufthansa", "https://www.lufthansa.com"]];

    var i_1;
    var i_2;
 for (i_1 = 0; i_1 <= list_air_lines.length; i_1++) {
     var created_element_div = document.createElement("DIV");
     var created_element_div_header = document.createElement("H1");
     var created_element_div_link = document.createElement("A");




     if(global_research !== "korea" && i_1 === 1){
         i_1++;
     }

     created_element_div.id = "div" + list_air_lines[i_1][1];
     created_element_div_header.id = "header" + list_air_lines[i_1][1];
     created_element_div.classList.add("border", "border-light", "p-2", "mb-2");
     created_element_div_header.classList.add("text-light");
     created_element_div_link.classList.add("text-white-custom");
     created_element_div_link.innerHTML = list_air_lines[i_1][0];
     created_element_div_link.setAttribute("href", list_air_lines[i_1][2]);
     created_element_div_link.setAttribute("target", "_blank");
     document.getElementById("results").appendChild(created_element_div);
     document.getElementById("div" + list_air_lines[i_1][1]).appendChild(created_element_div_header);
     document.getElementById("header" + list_air_lines[i_1][1]).appendChild(created_element_div_link);



 }
}