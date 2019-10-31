
var list_maps = [["Flight Connections", "flightconnections", "#"],["Google Maps", "googlemaps", "https://www.google.com/maps"], ["KakaoMap", "kakaomap", "https://map.kakao.com/"]];//init array
var list_air_lines = [["Google Flights", "googleflights", "https://www.google.com/flights"], ["Korean Air", "koreanair", "https://www.koreanair.com"], ["Easy Jet", "easyjet", "https://www.easyjet.com"], ["Air France", "airfrance", "https://www.airfrance.co.uk/"], ["LuftHansa", "lufthansa", "https://www.lufthansa.com"]];//init array
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

function showResults() {

    var i_2 = 0;//init var

    var length_array_air_lines = list_air_lines.length;
    var length_array_list_maps = list_maps.length;
    var i_1 = 0;//init var







    while  (i_1 <= length_array_air_lines-1) {//execute the following code if i_1 is inferior or equal to the length of the array list_air_lines

       var created_element_div = document.createElement("DIV");//creating  a div element
        var created_element_div_header = document.createElement("H1");//creating  h1 element
       var created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "korea" && i_1 === 1) {//execute the following code if global research is not equal to korea
            i_1++;//i_1+1
        }

        created_element_div.id = "div" + list_air_lines[i_1][1];//set the created_element_div's id
        created_element_div_header.id = "header" + list_air_lines[i_1][1];//set the created_element_header's id
        created_element_div.classList.add("border", "border-light", "p-2", "mb-2");//set the created_element_div_2's classlist
        created_element_div_header.classList.add("text-light");//set the created_element_header's classlist
        created_element_div_link.classList.add("text-white-custom");//set the created_element_div_link's classlist
        created_element_div_link.innerHTML = list_air_lines[i_1][0];//set innerHTML
        created_element_div_link.setAttribute("href", list_air_lines[i_1][2]);//set an href attribute
        created_element_div_link.setAttribute("target", "_blank");//set an target attribute
        document.getElementById("results").appendChild(created_element_div);//append created_element_div_2 to the div results element
        document.getElementById("div" + list_air_lines[i_1][1]).appendChild(created_element_div_header);//append created_element_header_2 to the   element
        document.getElementById("header" + list_air_lines[i_1][1]).appendChild(created_element_div_link);//append created_element_link_2 to the  element
        i_1++;
    }
    while  (i_2 <= length_array_list_maps) {//execute the following code if i_2 is inferior or equal to the length of the array list_maps




         created_element_div = document.createElement("DIV");//creating  a div element
         created_element_div_header = document.createElement("H1");//creating  h1 element
         created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "korea" && i_2 === 1) {//execute the following code if global research is not equal to korea
            break;
        }


        created_element_div.id = "div" + list_maps[i_2][1];//set the created_element_div_2's id
        created_element_div_header.id = "header" + list_maps[i_2][1];//set the created_element_header_2's id
        created_element_div.classList.add("border", "border-light", "p-2", "mb-2");//set the created_element_div_2's classlist
        created_element_div_header.classList.add("text-light");//set the created_element_header_2's classlist
        created_element_div_link.classList.add("text-white-custom");//set thecreated_element_div_link_2's classlist
        created_element_div_link.innerHTML = list_maps[i_2][0];//set innerHTML
        created_element_div_link.id = "link" + list_maps[i_2][1];
         if(list_maps[i_2][2] === "#"){
            created_element_div_link.setAttribute("onclick", "dropDown();");
        }else{
            created_element_div_link.setAttribute("href", list_maps[i_2][2]);//set an href attribute
        }

        created_element_div_link.setAttribute("target", "_blank");//set an target attribute
        document.getElementById("maplist").appendChild(created_element_div);//append created_element_div_2 to the div maplist element
        document.getElementById("div" + list_maps[i_2][1]).appendChild(created_element_div_header);//append created_element_header_2 to the element
        document.getElementById("header" + list_maps[i_2][1]).appendChild(created_element_div_link);//append created_element_link_2 to the element

        i_2++;

    }



}
function dropDown() {
    var deleted_element = document.getElementById("link" + list_maps[0][1]);
    var parent_deleted_element = deleted_element.parentElement.id;
    deleted_element.remove();
    var created_element_iframe = parent_deleted_element.createElement("iframe");


}
