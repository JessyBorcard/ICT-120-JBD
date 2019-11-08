


var data = 0, a = 0, data_out_country = [0],  data_out_name = [0], search_country_id = "", i = 0;
function readTownsJson(search_country_id, where_to_add) {

    function readTextFile(callback) {
        file = "Json/cities.json";
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function() {
            if (rawFile.readyState === 4 && rawFile.status == "200") {
                callback(rawFile.responseText);
            }
        };
        rawFile.send(null);
    }

//usage:
    readTextFile(function(text){

         data = JSON.parse(text);
        var parent = document.getElementById(where_to_add);
         for (a = 0; a < data.length; a++) {
             data_out_country[a] = data[a].country;

             if(data_out_country[a] === search_country_id) {
                 data_out_name[a] = data[a].name;
                 var created_option = document.createElement("option");
                 created_option.value = data_out_name[a];
                 created_option.innerHTML = data_out_name[a];
                 parent.appendChild(created_option);
             }

         }


    });


}
