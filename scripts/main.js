function getstock1() {
    // Go on, fork this repo then change the "var country" to your country code and "var productID" to
    // the product ID you're getting the stock for to get local IKEA product stock. You know, something
    // like "my" for Malaysia, "sg" for Singapore, etc. But you still need to change the location names
    //because IKEA API didn't have that. Do note that the "x-client-id" thing is "hardcoded" so you
    //don't have to change that.
    var country = "my";
    var productID = "10373589";
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("detailsPhysical-" + productID + "-store1").innerHTML = xhttp.response.data[0].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store2").innerHTML = xhttp.response.data[1].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store3").innerHTML = xhttp.response.data[2].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store4").innerHTML = xhttp.response.data[3].availableStocks[0].quantity;
      }
    };
    xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=StoresList,Restocks,SalesLocations", true);
    xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
    xhttp.responseType = "json";
    xhttp.send();
  }

// The reason why there's a getstock2 function is because there's a second product. Same applies below.

function getstock2() {
    var country = "my";
    var productID = "00540664";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("detailsPhysical-" + productID + "-store1").innerHTML = xhttp.response.data[0].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store2").innerHTML = xhttp.response.data[1].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store3").innerHTML = xhttp.response.data[2].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store4").innerHTML = xhttp.response.data[3].availableStocks[0].quantity;
      }
    };
    xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=StoresList,Restocks,SalesLocations", true);
    xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
    xhttp.responseType = "json";
    xhttp.send();
  }

function getstock3() {
    var country = "my";
    var productID = "50511683";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("detailsPhysical-" + productID + "-store1").innerHTML = xhttp.response.data[0].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store2").innerHTML = xhttp.response.data[1].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store3").innerHTML = xhttp.response.data[2].availableStocks[0].quantity;
        document.getElementById("detailsPhysical-" + productID + "-store4").innerHTML = xhttp.response.data[3].availableStocks[0].quantity;
      }
    };
    xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=StoresList,Restocks,SalesLocations", true);
    xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
    xhttp.responseType = "json";
    xhttp.send();
  }

// Below are used for restocks. Do not ask why there's restock function for each stores because I don't even know why.

function restock1() {
  var country = "my";
  var productID = "10373589";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[0].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store1").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[0].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[0].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock2() {
  var country = "my";
  var productID = "10373589";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[1].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store2").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[1].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[1].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock3() {
  var country = "my";
  var productID = "10373589";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[2].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store3").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[2].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[2].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock4() {
  var country = "my";
  var productID = "10373589";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[3].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store4").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[3].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[3].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock5() {
  var country = "my";
  var productID = "00540664";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[0].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store1").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[0].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[0].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock6() {
  var country = "my";
  var productID = "00540664";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[1].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store2").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[1].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[1].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock7() {
  var country = "my";
  var productID = "00540664";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[2].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store3").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[2].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[2].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock8() {
  var country = "my";
  var productID = "00540664";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[3].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store4").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[3].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[3].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock9() {
  var country = "my";
  var productID = "50511683";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[0].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store1").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[0].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[0].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock10() {
  var country = "my";
  var productID = "50511683";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[1].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store2").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[1].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[1].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock11() {
  var country = "my";
  var productID = "50511683";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[2].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store3").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[2].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[2].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restock12() {
  var country = "my";
  var productID = "50511683";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 && xhttp.response.data[3].availableStocks[0].restocks[0].quantity >= 0) {
      document.getElementById("Restocks-" + productID + "-store4").innerHTML = 
      "Estimated restock date: " + xhttp.response.data[3].availableStocks[0].restocks[0].earliestDate + " to " + xhttp.response.data[3].availableStocks[0].restocks[0].latestDate;
    }
  };
  xhttp.open("GET", "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID + "&expand=Restocks", true);
  xhttp.setRequestHeader("x-client-id","b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631");
  xhttp.responseType = "json";
  xhttp.send();
}

function restockall() {
  restock1();
  restock2();
  restock3();
  restock4();
  restock5();
  restock6();
  restock7();
  restock8();
  restock9();
  restock10();
  restock11();
  restock12();
}
function runall() {
  getstock1();
  getstock2();
  getstock3();
  restockall();
}