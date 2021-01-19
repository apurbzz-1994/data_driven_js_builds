// function that generates the uri path for api call
function webApiCall(url, apiArguments){
    let paramString = "";
    for(let key in apiArguments){
        if(apiArguments.hasOwnProperty(key)){
            if(paramString.length == 0){
                paramString += "?";
            }
            else{
                paramString += "&";
            }
            // encoding the key and value and joining them to form one
            // complete query parameter
            let oneQuery = encodeURIComponent(key) + "=" + encodeURIComponent( apiArguments[key]);
            // appending to the whole parameter string
            paramString += oneQuery;
        }
    }

    // creating a script tag so that the uri invokes an api call
    let script = document.createElement('script');
    script.src = url + paramString;
    document.body.appendChild(script);
}

function showWeatherData(data){
    console.log("Does it work?");
    console.log(data);
}

function callToMetaWeatherApi(lat, long){
    let url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/";

    let latLongString = `${lat},${long}`;
    
    // query parameters
    let queryData = {
        "lattlong": latLongString,
        "callback": "showWeatherData" 
    }
    webApiCall(url, queryData);
}



// calling to the api
callToMetaWeatherApi(50.068, -5.316);