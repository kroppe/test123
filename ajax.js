// JavaScript
// Vi ska använda AJAX för att hämta innehållet på en hemsida

// Vad är AJAX?
// Det är inte ett fotbollslag...
// Det är inte ett diskmedel...
// Det är inte ett programmeringsspråk...

// ...det är en teknik, en kombination av saker, för att hämta data från URLs
// AJAX - Asynchronous JavaScript and XML

// Påbörja en hämtning
var request = new XMLHttpRequest();

request.onreadystatechange = function() {


	console.log("Nånting hände!");

	if(request.readyState == 4 && request.status == 200) {
      // I variabeln res (response) finns det information...
      console.log("Vi har fått ett svar!");
      console.log("Svaret (response) är " + request.responseText);

      // Spara texten i en variabel
      var data = request.responseText;
      document.write(data);
     }
}

request.open('GET', 'https://grumpy-baboon-qy7t.rapidapi.io/random-number?max=10&min=1');
request.send();
console.log("Sista raden i koden...");
