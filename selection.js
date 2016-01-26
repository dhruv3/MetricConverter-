chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    debugger;
    var arrayCheck = ["pounds","lbs","miles","mph","foot","feet","fahrenheit","F","inch"];
    var stringToBeChecked = window.getSelection().toString();
    var valueToDisplay;
    if (request.method == "getSelection"){
        for(var index = 0;index < arrayCheck.length;index++){
            var indexOfString = stringToBeChecked.indexOf(arrayCheck[index]);
            if(indexOfString != -1){
                valueToDisplay = doConversion(index, parseInt(stringToBeChecked.substring(0,indexOfString)));
                break;
             }
        }
        sendResponse({data: valueToDisplay.toString()});
    }
    else
        sendResponse({}); // snub them.

    function doConversion(index, convertedValue){
        var convertedValue = convertedValue;
        switch(arrayCheck[index]){
            case "lb":
            case "pound":
            case "lbs":
            case "pounds":
                convertedValue = convertedValue*0.453592;
                convertedValue = convertedValue + " kgs";
                break;
            case "miles":
            case "mile":
                convertedValue = convertedValue*1.60934;
                convertedValue = convertedValue + " kilometers";
                break;
            case "mph":
                convertedValue = convertedValue*1.60934;
                convertedValue = convertedValue + " kph";
                break;
            case "feet":
            case "foot":
                convertedValue = convertedValue*0.3048;
                convertedValue = convertedValue + " metre";
                break;
            case "fahrenheit":
            case "F":
                convertedValue = (convertedValue - 32)*0.5556;
                convertedValue = convertedValue + " Celsius";
                break;
            case "inch":
                convertedValue = convertedValue*2.54;
                convertedValue = convertedValue + " centimeter";
                break;
            default:
                break;
        }
        return convertedValue;
    }
});

/*
Pounds (lbs) to Kilograms
Miles to Kilometers
Miles per hour to Kilometers per Hour
Foot/Feet to Meters
Kelvin to Celsius
Fahrenheit to Celsius
inch to cm
yard to meters
(US) fl. oz. to ml
ounces to grams*/
