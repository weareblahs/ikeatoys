function getstock2() {
  // Go on, fork this repo then change the "var country" to your country code and "var productID" to
  // the product ID you're getting the stock for to get local IKEA product stock. You know, something
  // like "my" for Malaysia, "sg" for Singapore, etc. But you still need to change the location names
  //because IKEA API didn't have that. Do note that the "x-client-id" thing is "hardcoded" so you
  //don't have to change that.
  var country = "my";
  var productID2 = "50511683";
  var xhttp2 = new XMLHttpRequest();
  xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("detailsPhysical-" + productID2).innerHTML = 
      "IKEA Cheras: " + xhttp.response.data[0].availableStocks[0].quantity + 
      "<br>IKEA Damansara: " + xhttp.response.data[1].availableStocks[0].quantity + 
      "<br>IKEA Tebrau: " + xhttp.response.data[2].availableStocks[0].quantity +
      "<br>IKEA Batu Kawan: " + xhttp.response.data[3].availableStocks[0].quantity;
    }
  };
  xhttp2.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID2 + "&expand=StoresList,Restocks,SalesLocations", true);
  xhttp2.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp2.responseType = "json";
  xhttp2.send();
}