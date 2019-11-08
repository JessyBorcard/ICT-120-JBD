
var index = 0;
var global_research = "";

function validateForm()
{
    var index = document.getElementById("parent");//get and save an element
    var research = ""; //Init var
    var  research_text = "";//Init var
    research = index.options[index.selectedIndex].value;//save the selected index's value
    research_text = index.options[index.selectedIndex].innerText;//save the selected index's innertext
    if(research === ""){
        alert("vous devez rechercher quelque chose");//it will never goes here, except if the script didn't loaded properly(i think?)
    }else {

        localStorage.research = research;//save research in a local storage
        localStorage. research_text  =  research_text ;//save research in a local storage
        window.open("Recherchetransport.html");//open a "new" tab

    }

}

function backgroundChange() {
    /*
    * NOT every countries flag is added
    * if you search for a country and the background is undefined, it's normal
    *
    * implemented flags : Switzerland, Germany, France, Japan, South korea AND north korea
    *
    * */

    var research = localStorage.research;//get the local storage value
    var research_text = localStorage.research_text;//get the local storage value
    global_research = research;//get the local storage value
    global_research_text = research_text;//get the local storage value

    document.getElementById("header1").innerText = research_text;//Set the header text
    document.getElementById("hero2").style.backgroundImage = `url("Pictures/${research}.png")`;//get the image by the country ID



}
function backgroundChangeSearchBoxin(){
    /*
    * this function is unused
    *
    */

    document.forms["barRechercheForm"]["q"].style.backgroundImage = "url('')";

}
function backgroundChangeSearchBoxOut(){
    /*
    * this function is unused
    *
    */

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
function comfirmation() {
    var chk1_val = document.getElementById("chk11").value;//get and save an element
    var chk2_val  = document.getElementById("chk2").value;//get and save an element
    var chk3_val  = document.getElementById("chk3").value;//get and save an element
    var chk4_val  = document.getElementById("aggreebutton").value;//get and save an element
    var card_id = document.getElementById("cardid").value;//get and save an element
    var txtarea_val = document.getElementById("txtareapn").value;//get and save an element
    localStorage.chk1_val = chk1_val;// save an element to a local storage
    localStorage.chk2_val = chk2_val;// save an element to a local storage
    localStorage.chk3_val = chk3_val;// save an element to a local storage
    localStorage.chk4_val = chk4_val;// save an element to a local storage
    localStorage.card_id = card_id;// save an element to a local storage
    localStorage.txtarea_val = txtarea_val;// save an element to a local storage

    window.open("VerificationList.html");//open a "new" page but neither in a new tab or window

}
function addPeople() {
    var input_val = document.getElementById("input1");//get and save an element
    var input_val2 = document.getElementById("input2");//get and save an element

    input_val2.value = input_val.value;//Save the value in a var
    createPeople(index, input_val.value);//calling a function
    index++;


}
function createPeople(id_value, txt_val) {
    var created_element_div=document.createElement("DIV");//creating an element
    var created_element_div2=document.createElement("DIV");//creating an element
    var created_element_form=document.createElement("form");//creating an element
    var created_element_checkbox =document.createElement("input");//creating an element
    var created_element_label= document.createElement("label");//creating an element
    var parent = document.getElementById("departure");//creating an element

    created_element_div2.id = "div_2" + id_value;//set the id
    created_element_div.id = "div" + id_value;//set the id
    created_element_div.classList.add("d-flex", "ml-3");
    created_element_form.id = "form" + id_value;//set the id
    created_element_checkbox.id = "chk" + id_value;//set the id
    created_element_checkbox.classList.add("form-check-input");//Add classes
    created_element_div2.classList.add("form-check");//Add classes
    created_element_checkbox.setAttribute("type","checkbox");//set an attribute
    created_element_label.id = "p" + id_value;//set the id
    created_element_label.classList.add("form-check-label");//Add classes
    created_element_label.innerText = txt_val;//Set inner text
    parent.appendChild(created_element_div);//Append a child to his parent
    created_element_div.appendChild(created_element_form);//Append a child to his parent
    created_element_form.appendChild(created_element_div2);//Append a child to his parent
    created_element_div2.appendChild(created_element_checkbox);//Append a child to his parent
    created_element_div2.appendChild(created_element_label);//Append a child to his parent


    created_element_div=document.createElement("DIV");//creating an element
    created_element_div2=document.createElement("DIV");//creating an element
    created_element_form=document.createElement("form");//creating an element
    created_element_checkbox =document.createElement("input");//creating an element
    created_element_label= document.createElement("label");//creating an element
    parent = document.getElementById("arrival");//creating an element

    created_element_div2.id = "div_2" + id_value+ id_value;//set the id
    created_element_div.id = "div" + id_value+ id_value;//set the id
    created_element_div.classList.add("d-flex", "ml-3");//set the id
    created_element_form.id = "form" + id_value+ id_value;//set the id
    created_element_checkbox.id = "chk" + id_value+ id_value;//set the id
    created_element_checkbox.classList.add("form-check-input");//Add classes
    created_element_div2.classList.add("form-check");//Add classes
    created_element_checkbox.setAttribute("type","checkbox");//set an attribute
    created_element_label.id = "p" + id_value+ id_value;//set the id
    created_element_label.classList.add("form-check-label");//Add classes
    created_element_label.innerText = txt_val;//Set inner text
    parent.appendChild(created_element_div);//Append a child to his parent
    created_element_div.appendChild(created_element_form);//Append a child to his parent
    created_element_form.appendChild(created_element_div2);//Append a child to his parent
    created_element_div2.appendChild(created_element_checkbox);//Append a child to his parent
    created_element_div2.appendChild(created_element_label);//Append a child to his parent
}

