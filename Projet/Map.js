
function f1() {


    var list_air_lines = [["Google Flights", "googleflights", "https://www.google.com/flights"], ["Korean Air", "koreanair", "https://www.koreanair.com"], ["Easy Jet", "easyjet", "https://www.easyjet.com"], ["Air France", "airfrance", "https://www.airfrance.co.uk/"], ["LuftHansa", "lufthansa", "https://www.lufthansa.com"]];
    var i_2 = 0;
    var list_maps = [["Google Maps", "googlemaps", "https://www.google.com/maps"], ["Google Maps", "googlemaps", "https://www.google.com/maps"]];
    var i_1 = 0;


    while (i_1 <= 3){
        var created_element_div = document.createElement("DIV");
    var created_element_div_header = document.createElement("H1");
    var created_element_div_link = document.createElement("A");


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
i_1++;
}
    while (i_2 <= 0){
    created_element_div= document.createElement("DIV");
     created_element_div_header = document.createElement("H1");
     created_element_div_link = document.createElement("A");

    created_element_div.id = "div" + list_maps[i_2][1];
    created_element_div_header.id = "header" + list_maps[i_2][1];
    created_element_div.classList.add("border", "border-light", "p-2", "mb-2");
    created_element_div_header.classList.add("text-light");
    created_element_div_link.classList.add("text-white-custom");
    created_element_div_link.innerHTML = list_maps[i_2][0];
    created_element_div_link.setAttribute("href", list_maps[i_2][2]);
    created_element_div_link.setAttribute("target", "_blank");
    document.getElementById("maplist").appendChild(created_element_div);
    document.getElementById("div" + list_maps[i_2][1]).appendChild(created_element_div_header);
    document.getElementById("header" + list_maps[i_2][1]).appendChild(created_element_div_link);
    i_2++;
}

}


function f() {
    alert("woop");








}
