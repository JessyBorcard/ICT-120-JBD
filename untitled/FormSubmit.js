
var index = 0;
var global_research = "";

function validateForm()
{
    var index = document.getElementById("parent");
    var research = "";
    var  research_text = "";
    research = index.options[index.selectedIndex].value;
    research_text = index.options[index.selectedIndex].innerText;
    if(research === ""){
        alert("vous devez rechercher quelque chose");
    }else {

        localStorage.research = research;
        localStorage. research_text  =  research_text ;
        window.open("Recherchetransport.html");

    }

}

function backgroundChange() {

    var research = localStorage.research;
    var research_text = localStorage.research_text;
    global_research = research;
    global_research_text = research_text;

        document.getElementById("header1").innerText = research_text;
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
function comfirmation() {
    var chk1_val = document.getElementById("chk11").value;
    var chk2_val  = document.getElementById("chk2").value;
    var chk3_val  = document.getElementById("chk3").value;
    var chk4_val  = document.getElementById("aggreebutton").value;
    var card_id = document.getElementById("cardid").value;
    var txtarea_val = document.getElementById("txtareapn").value;
    localStorage.chk1_val = chk1_val;
    localStorage.chk2_val = chk2_val;
    localStorage.chk3_val = chk3_val;
    localStorage.chk4_val = chk4_val;
    localStorage.card_id = card_id;
    localStorage.txtarea_val = txtarea_val;

    window.open("VerificationList.html");

}
function addPeople() {
    var input_val = document.getElementById("input1");
    var input_val2 = document.getElementById("input2");

    input_val2.value = input_val.value;
    createPeople(index, input_val.value);
    index++;


}
function createPeople(id_value, txt_val) {
    var created_element_div=document.createElement("DIV");
    var created_element_div2=document.createElement("DIV");
    var created_element_form=document.createElement("form");
    var created_element_checkbox =document.createElement("input");
    var created_element_label= document.createElement("label");
    var parent = document.getElementById("departure");


    created_element_div2.id = "div_2" + id_value;
    created_element_div.id = "div" + id_value;
    created_element_div.classList.add("d-flex", "ml-3");
    created_element_form.id = "form" + id_value;
    created_element_checkbox.id = "chk" + id_value;
    created_element_checkbox.classList.add("form-check-input");
    created_element_div2.classList.add("form-check");
    created_element_checkbox.setAttribute("type","checkbox");
    created_element_label.id = "p" + id_value;
    created_element_label.classList.add("form-check-label");
    created_element_label.innerText = txt_val;
    parent.appendChild(created_element_div);
    created_element_div.appendChild(created_element_form);
    created_element_form.appendChild(created_element_div2);
   created_element_div2.appendChild(created_element_checkbox);
   created_element_div2.appendChild(created_element_label);


     created_element_div=document.createElement("DIV");
     created_element_div2=document.createElement("DIV");
     created_element_form=document.createElement("form");
     created_element_checkbox =document.createElement("input");
    created_element_label= document.createElement("label");
     parent = document.getElementById("arrival");

    created_element_div2.id = "div_2" + id_value+ id_value;
    created_element_div.id = "div" + id_value+ id_value;
    created_element_div.classList.add("d-flex", "ml-3");
    created_element_form.id = "form" + id_value+ id_value;
    created_element_checkbox.id = "chk" + id_value+ id_value;
    created_element_checkbox.classList.add("form-check-input");
    created_element_div2.classList.add("form-check");
    created_element_checkbox.setAttribute("type","checkbox");
    created_element_label.id = "p" + id_value+ id_value;
    created_element_label.classList.add("form-check-label");
    created_element_label.innerText = txt_val;
    parent.appendChild(created_element_div);
    created_element_div.appendChild(created_element_form);
    created_element_form.appendChild(created_element_div2);
    created_element_div2.appendChild(created_element_checkbox);
    created_element_div2.appendChild(created_element_label);
}

