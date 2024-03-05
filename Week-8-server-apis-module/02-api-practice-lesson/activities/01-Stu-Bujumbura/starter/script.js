// Add your own API key between the ""
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=166a433c57516f51dfab1f7edaed8413";

// We then created an Fetch call
fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    // Create CODE HERE to Log the queryURL
    console.log (queryURL)
    // Create CODE HERE to log the resulting object
    console.log (data)
    // Create CODE HERE to calculate the temperature (converted from Kelvin)

    // Create CODE HERE to transfer content to HTML
    var cityDiv = (data.name)
    var cityDiv = document.querySelector(".city");
    cityDiv.textContent = `Weather in ${data.name}`;
    // Hint: To convert from Kelvin to Celsius: C = K - 273.15
    // Create CODE HERE to dump the temperature content into HTML

  });