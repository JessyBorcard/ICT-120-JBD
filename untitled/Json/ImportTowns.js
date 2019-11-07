


var data = 0;
function readTownsJson() {

    function readTextFile(callback) {
        file = "node_modules/all-countries-and-cities-json/countries.json";
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


    });


    console.log(data.global_research_text);
}