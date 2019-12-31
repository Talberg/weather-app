var searchHistory = [];
var APIkey = '&APPID=daa111366ea26bccb168e3feed86a063'

var queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=homer'; 
$.ajax({
    url : queryURL,
    method : "GET" 
}).then(function(response){
console.log(response)})
