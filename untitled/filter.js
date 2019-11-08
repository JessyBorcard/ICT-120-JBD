var rail_road_list = [["CFF", "cff", "https://www.sbb.ch/", "CH"], ["Korail", "korail", "http://www.letskorail.com/ebizprd/prdMain.do", "KR"]];
var list_maps = [["Flight Connections", "flightconnections", ""],["Google Maps", "googlemaps", "https://www.google.com/maps"], ["KakaoMap", "kakaomap", ""]];//init array
var iframe_list =[[list_maps[0][1],"https://www.flightconnections.com"], [list_maps[2][1],"https://map.kakao.com"]];
var list_boats = [["Navig", "navig", "https://www.navig.ch/"]];
var list_foot = [[list_maps[1][0], list_maps[1][1]+"foot", list_maps[1][2]]];
var list_by = [[list_maps[1][0], list_maps[1][1]+"by", list_maps[1][2]]];
var list_air_lines = [["Google Flights", "googleflights", "https://www.google.com/flights"], ["Korean Air", "koreanair", "https://www.koreanair.com"], ["Easy Jet", "easyjet", "https://www.easyjet.com"], ["Air France", "airfrance", "https://www.airfrance.co.uk/"], ["LuftHansa", "lufthansa", "https://www.lufthansa.com"]];//init array
var close = "close";
var instant_data = "";
var current_data = "";
var parent = document.getElementById("results");//get the element and save
var child_nodes = "";
var i = 0;

var a = 0;
function filterNavTrain() {


    current_data = document.getElementById("div" + rail_road_list[0][1]);//get the element and save
    child_nodes = parent.childNodes;//get the parent's element child

    if(!document.body.contains(current_data)) {
        while (i <= child_nodes.length) {
            if (child_nodes[i] === undefined) {//will break if the child's index is undefined
                break;
            }
            child_nodes[i].remove();//If the not undefined it will remove it

        }
        showTrainResults();//calling a function
    }



}
function showTrainResults() {
    var i_1 = 0;
    var length_rail_road = rail_road_list.length;//get the length of the table

    while  (i_1 <=  length_rail_road - 1) {//execute the following code if i_1 is inferior or equal to the length of the array list_air_lines

        var created_element_div = document.createElement("DIV");//creating  a div element
        var created_element_div_header = document.createElement("H1");//creating  h1 element
        var created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "KR" && i_1 === 1) {//execute the following code if global research is not equal to korea
            i_1++;//i_1+1
        }

        created_element_div.id = "div" + rail_road_list[i_1][1];//set the created_element_div's id
        created_element_div_header.id = "header" + rail_road_list[i_1][1];//set the created_element_header's id
        created_element_div.classList.add("border", "border-light", "p-2", "mb-2");//set the created_element_div_2's classlist
        created_element_div_header.classList.add("text-light");//set the created_element_header's classlist
        created_element_div_link.classList.add("text-white-custom");//set the created_element_div_link's classlist
        created_element_div_link.innerHTML = rail_road_list[i_1][0];//set innerHTML
        created_element_div_link.setAttribute("href", rail_road_list[i_1][2]);//set an href attribute
        created_element_div_link.setAttribute("target", "_blank");//set an target attribute
        document.getElementById("results").appendChild(created_element_div);//append created_element_div_2 to the div results element
        document.getElementById("div" + rail_road_list[i_1][1]).appendChild(created_element_div_header);//append created_element_header_2 to the   element
        document.getElementById("header" + rail_road_list[i_1][1]).appendChild(created_element_div_link);//append created_element_link_2 to the  element
        i_1++;
    }

}
function showfootResult(){
    var i_1 = 0;
    var length_rail_road = list_foot.length;//get the length of the table

    while  (i_1 <=  length_rail_road - 1) {//execute the following code if i_1 is inferior or equal to the length of the array list_air_lines

        var created_element_div = document.createElement("DIV");//creating  a div element
        var created_element_div_header = document.createElement("H1");//creating  h1 element
        var created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "KR" && i_1 === 1) {//execute the following code if global research is not equal to korea
            i_1++;//i_1+1
        }

        created_element_div.id = "div" + list_foot[i_1][1];//set the created_element_div's id
        created_element_div_header.id = "header" + list_foot[i_1][1];//set the created_element_header's id
        created_element_div.classList.add("border", "border-light", "p-2", "mb-2");//set the created_element_div_2's classlist
        created_element_div_header.classList.add("text-light");//set the created_element_header's classlist
        created_element_div_link.classList.add("text-white-custom");//set the created_element_div_link's classlist
        created_element_div_link.innerHTML = list_foot[i_1][0];//set innerHTML
        created_element_div_link.setAttribute("href", list_foot[i_1][2]);//set an href attribute
        created_element_div_link.setAttribute("target", "_blank");//set an target attribute
        document.getElementById("results").appendChild(created_element_div);//append created_element_div_2 to the div results element
        document.getElementById("div" + list_foot[i_1][1]).appendChild(created_element_div_header);//append created_element_header_2 to the   element
        document.getElementById("header" + list_foot[i_1][1]).appendChild(created_element_div_link);//append created_element_link_2 to the  element
        i_1++;
    }


}
function showBoatResults(){
    var i_1 = 0;
    var length_rail_road = list_boats.length;//get the length of the table

    while  (i_1 <=  length_rail_road - 1) {//execute the following code if i_1 is inferior or equal to the length of the array list_air_lines

        var created_element_div = document.createElement("DIV");//creating  a div element
        var created_element_div_header = document.createElement("H1");//creating  h1 element
        var created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "KR" && i_1 === 1) {//execute the following code if global research is not equal to korea
            i_1++;//i_1+1
        }

        created_element_div.id = "div" + list_boats [i_1][1];//set the created_element_div's id
        created_element_div_header.id = "header" + list_boats [i_1][1];//set the created_element_header's id
        created_element_div.classList.add("border", "border-light", "p-2", "mb-2");//set the created_element_div_2's classlist
        created_element_div_header.classList.add("text-light");//set the created_element_header's classlist
        created_element_div_link.classList.add("text-white-custom");//set the created_element_div_link's classlist
        created_element_div_link.innerHTML = list_boats [i_1][0];//set innerHTML
        created_element_div_link.setAttribute("href", list_boats [i_1][2]);//set an href attribute
        created_element_div_link.setAttribute("target", "_blank");//set an target attribute
        document.getElementById("results").appendChild(created_element_div);//append created_element_div_2 to the div results element
        document.getElementById("div" + list_boats [i_1][1]).appendChild(created_element_div_header);//append created_element_header_2 to the   element
        document.getElementById("header" + list_boats [i_1][1]).appendChild(created_element_div_link);//append created_element_link_2 to the  element
        i_1++;
    }


}

function showByResults() {
    var i_1 = 0;
    var length_rail_road = list_by.length;//get the length of the table

    while  (i_1 <=  length_rail_road - 1) {//execute the following code if i_1 is inferior or equal to the length of the array list_air_lines

        var created_element_div = document.createElement("DIV");//creating  a div element
        var created_element_div_header = document.createElement("H1");//creating  h1 element
        var created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "KR" && i_1 === 1) {//execute the following code if global research is not equal to korea
            i_1++;//i_1+1
        }

        created_element_div.id = "div" + list_by[i_1][1];//set the created_element_div's id
        created_element_div_header.id = "header" + list_by[i_1][1];//set the created_element_header's id
        created_element_div.classList.add("border", "border-light", "p-2", "mb-2");//set the created_element_div_2's classlist
        created_element_div_header.classList.add("text-light");//set the created_element_header's classlist
        created_element_div_link.classList.add("text-white-custom");//set the created_element_div_link's classlist
        created_element_div_link.innerHTML = list_by[i_1][0];//set innerHTML
        created_element_div_link.setAttribute("href", list_by[i_1][2]);//set an href attribute
        created_element_div_link.setAttribute("target", "_blank");//set an target attribute
        document.getElementById("results").appendChild(created_element_div);//append created_element_div_2 to the div results element
        document.getElementById("div" + list_by[i_1][1]).appendChild(created_element_div_header);//append created_element_header_2 to the   element
        document.getElementById("header" + list_by[i_1][1]).appendChild(created_element_div_link);//append created_element_link_2 to the  element
        i_1++;
    }
}
function filterNavPlane() {

    current_data = document.getElementById("div" + list_air_lines[0][1]);//get the element and save
    child_nodes = parent.childNodes;
    if(!document.body.contains(current_data)) {//get the parent's element child
        while (i <= child_nodes.length) {
            if (child_nodes[i] === undefined) {//will break if the child's index is undefined
                break;
            }
            child_nodes[i].remove();//If the not undefined it will remove it

        }
        showResults();//calling a function
    }



}

function filterNavBoat() {

    current_data = document.getElementById("div" + list_boats[0][1]);//get the element and save
    child_nodes = parent.childNodes;
    if(!document.body.contains(current_data)) {//get the parent's element child
        while (i <= child_nodes.length) {
            if (child_nodes[i] === undefined) {//will break if the child's index is undefined
                break;
            }
            child_nodes[i].remove();//If the not undefined it will remove it
        }
        showBoatResults();//calling a function
    }



}

function filterNavBy() {


    current_data = document.getElementById("div" + list_by[0][1]);//get the element and save
    child_nodes = parent.childNodes;
    if(!document.body.contains(current_data)) {//get the parent's element child
        while (i <= child_nodes.length) {
            if (child_nodes[i] === undefined) {//will break if the child's index is undefined
                break;
            }
            child_nodes[i].remove();//If the not undefined it will remove it
        }
        showByResults();//calling a function
    }




}
function filterNavFoot() {


    current_data = document.getElementById("div" + list_foot[0][1]);//get the element and save
    child_nodes = parent.childNodes;
    if(!document.body.contains(current_data)) {//get the parent's element child
        while (i <= child_nodes.length) {
            if (child_nodes[i] === undefined) {//will break if the child's index is undefined
                break;
            }
            child_nodes[i].remove();//If the not undefined it will remove it
        }
        showfootResult();//calling a function
    }



}



function showResults() {

    var event_trigger = event.target.id;//save the trigger event
    var i_2 = 0;//init var

    var length_array_air_lines = list_air_lines.length;//get the length of the table
    var length_array_list_maps = list_maps.length;//get the length of the table
    var i_1 = 0;//init var







    while  (i_1 <= length_array_air_lines-1) {//execute the following code if i_1 is inferior or equal to the length of the array list_air_lines

        var created_element_div = document.createElement("DIV");//creating  a div element
        var created_element_div_header = document.createElement("H1");//creating  h1 element
        var created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "KR" && i_1 === 1) {//execute the following code if global research is not equal to korea
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
        if (event_trigger === "avion"){
            break;
        }



        created_element_div = document.createElement("DIV");//creating  a div element
        created_element_div_header = document.createElement("H1");//creating  h1 element
        created_element_div_link = document.createElement("A");//creating  an "a" element


        if (global_research !== "KR" && i_2 === 2) {//execute the following code if global research is not equal to korea
            break;
        }


        created_element_div.id = "div" + list_maps[i_2][1];//set the created_element_div_2's id
        created_element_div_header.id = "header" + list_maps[i_2][1];//set the created_element_header_2's id
        created_element_div.classList.add("border", "border-light", "p-2", "mb-2", "h-auto");//set the created_element_div_2's classlist
        created_element_div_header.classList.add("text-light");//set the created_element_header_2's classlist
        created_element_div_link.classList.add("text-white-custom");//set thecreated_element_div_link_2's classlist
        created_element_div_link.innerHTML = list_maps[i_2][0];//set innerHTML
        created_element_div_link.id = "link" + list_maps[i_2][1];
        if(list_maps[i_2][2] === ""){
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
    var event_trigger = event.target.id;//save the trigger event
    var trim_string = event_trigger.replace('link','');//"trim" what's before the event trigger
    var deleted_element = document.getElementById(event_trigger);//get and save the element
    var created_element_button = document.createElement("BUTTON");//Create a button
    var created_element_iframe = document.createElement("IFRAME");//Create a button
    var buffer;
    var i_buffer = 0;


    deleted_element.remove();
    created_element_iframe.id = "iframe" + trim_string;
    created_element_button.id = "button" + trim_string;
    document.getElementById("div" + trim_string).appendChild(created_element_button);//append a child to his parent
    document.getElementById("div" + trim_string).appendChild(created_element_iframe);//append a child to his parent
    created_element_iframe.setAttribute("width", "100%");//Set attributes
    created_element_iframe.setAttribute("height", "1200px");//Set attributes

    while(i_buffer <= iframe_list.length) {
        if (iframe_list[i_buffer][0] === trim_string) {
            buffer = iframe_list[i_buffer][1];//save the index of the array into a buffer
            break;//then break
        }
        i_buffer++;
    }


    created_element_iframe.setAttribute("src", buffer);




    created_element_button.setAttribute("onclick", "dropUp();");
    created_element_button.classList.add("btn", "btn-light", "btn-lg", "btn-block", "rounded-0");
    created_element_button.innerHTML = close;
}
function dropUp() {

    //init var
    var event_trigger = event.target.id;//save the trigger event
    var deleted_element = document.getElementById(event_trigger);//get and save the element
    var parent_deleted_element = deleted_element.parentElement;//get the element (var is not used yet)
    var sibling_deleted_element = document.getElementById("iframe" + event_trigger.replace('button', ''));
    var trim_string = event_trigger.replace('button','');//"trim" what's before the event trigger
    var buffer;
    var i_buffer = 0;
    var  created_element_div = document.createElement("DIV");//creating  a div element
    var  created_element_div_header = document.createElement("H1");//creating  h1 element
    var  created_element_div_link = document.createElement("A");//creating  an "a" element
//init var

    deleted_element.remove();//remove the id
    sibling_deleted_element.remove();//remove deleted_element's siblings

    created_element_div.id = "div" + trim_string ;//Set the id
    created_element_div_header.id = "header" + trim_string ;//Set the id
    created_element_div_link.id = "link" + trim_string ;//Set the id
    created_element_div.classList.add("border", "border-light", "p-2", "mb-2", "h-auto");//set the created_element_div_2's classlist
    created_element_div_header.classList.add("text-light");//set the created_element_header_2's classlist
    created_element_div_link.classList.add("text-white-custom");//set thecreated_element_div_link_2's classlist
    created_element_div_link.setAttribute("onclick","dropDown();");
    document.getElementById("header" + trim_string).appendChild(created_element_div_link);//append a child to his parent
    while(i_buffer <= list_maps.length) {
        if (list_maps[i_buffer][1] === trim_string) {
            buffer = list_maps[i_buffer][0];//save the index of the array into a buffer
            break;//then break
        }
        i_buffer++;
    }



    created_element_div_link.innerText = buffer;//set innerHTML

}
function addInfo() {




    var event_trigger = event.target.id;//get the event trigger
    var current_data = document.getElementById("info"+event_trigger);//get and save an element
    var created_element_li = document.createElement("li");//create an li

    var index1 = document.getElementById("select1");//get and save an element
    var index2 = document.getElementById("select2");//get and save an element
    var  option1 = index1.options[index1.selectedIndex].value;//get and save a selected index value
    var  option2 = index2.options[index2.selectedIndex].value;//get and save a selected index value
    var already_existing = document.getElementById(option1 + option2+event_trigger);//get and save an element
    created_element_li.innerText = option1 + "<>" + option2;//write inner text
    created_element_li.id = option1 + option2+event_trigger;//set an id to the element
    if(current_data.contains(already_existing)){//if the even trigger's element already contains the created element return
        return "good";

    }
    else
    {





        current_data.appendChild(created_element_li);//append the child to his parent



    }

}

