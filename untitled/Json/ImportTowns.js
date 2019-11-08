


var data = 0, a = 0, data_out_country = [0],  data_out_name = [0], search_country_id = "", i = 0;//Init var
function readTownsJson(search_country_id, where_to_add) {

    function readTextFile(callback) {
        file = "Json/cities.json";//create a var
        var rawFile = new XMLHttpRequest();//create a new request
        rawFile.overrideMimeType("application/json");//Override the mime type
        rawFile.open("GET", file, true);//Open the file in get method and enable the asynchronous mode
        rawFile.onreadystatechange = function() {//save a function
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);//callback the output
            }
        };
        rawFile.send(null);
    }

//usage:
    readTextFile(function(text){//call a function

         data = JSON.parse(text);
        var parent = document.getElementById(where_to_add);//get and save an element
         for (a = 0; a < data.length; a++) {
             data_out_country[a] = data[a].country;//save the index value of the json in another array

             if(data_out_country[a] === search_country_id) {
                 data_out_name[a] = data[a].name;//save the index value of the json in another array
                 var created_option = document.createElement("option");//create an element
                 created_option.value = data_out_name[a];//Set the value
                 created_option.innerHTML = data_out_name[a];//Set the inner HTML
                 parent.appendChild(created_option);//Append a child to his parent
             }

         }


    });


}
