runall = async() => {
  // Setup (creds to @fillduck)
  const country = "my";
  // NOTE: for every part, the arrays keep changing if different product ID.
  const productID1 = "10373589"; //103.735.89 - BLAHAJ 100cm
  const productID2 = "00540664"; //005.406.64 - BLAHAJ 50cm
  const productID3 = "50511683"; //505.116.83 - RUPTLING bag
  const baseURL = "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID1 + "," + productID2 + "," + productID3 + "&expand=StoresList,Restocks,SalesLocations";
  const headers = { "x-client-id": "b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631" };
  const response = await fetch(`${baseURL}`, { headers });
  const { data } = await response.json();
  const availabilities = data;
  // Get all stock
  document.getElementById("detailsPhysical-" + productID1 + "-store1").innerHTML = availabilities[1].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store2").innerHTML = availabilities[4].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store3").innerHTML = availabilities[7].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store4").innerHTML = availabilities[10].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store1").innerHTML = availabilities[0].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store2").innerHTML = availabilities[3].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store3").innerHTML = availabilities[6].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store4").innerHTML = availabilities[9].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store1").innerHTML = availabilities[2].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store2").innerHTML = availabilities[5].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store3").innerHTML = availabilities[8].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store4").innerHTML = availabilities[11].availableStocks[0].quantity;
  // Get stock finish. Now onto getting restock data.
  // The below code is for product 1.
  if (!! availabilities[1].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store1").innerHTML = "Estimated restock date: " + availabilities[1].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[1].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[4].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store2").innerHTML = "Estimated restock date: " + availabilities[4].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[4].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[7].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store3").innerHTML = "Estimated restock date: " + availabilities[7].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[7].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[10].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store4").innerHTML = "Estimated restock date: " + availabilities[10].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[10].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 2.
  if (!! availabilities[0].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store1").innerHTML = "Estimated restock date: " + availabilities[0].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[0].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[3].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store2").innerHTML = "Estimated restock date: " + availabilities[3].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[3].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[6].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store3").innerHTML = "Estimated restock date: " + availabilities[6].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[6].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[9].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store4").innerHTML = "Estimated restock date: " + availabilities[9].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[9].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 3.
  if (!! availabilities[2].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store1").innerHTML = "Estimated restock date: " + availabilities[2].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[5].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store2").innerHTML = "Estimated restock date: " + availabilities[5].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[8].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store3").innerHTML = "Estimated restock date: " + availabilities[8].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[11].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store4").innerHTML = "Estimated restock date: " + availabilities[11].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // Restock code finish. Now onto getting delivery info for all stores.
  // The below code is for product 1.
  if (availabilities[1].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[4].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[7].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[10].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (! availabilities[1].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[4].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[7].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[10].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 2.
  if (availabilities[0].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[3].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[6].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[9].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (! availabilities[0].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[3].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[6].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[9].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 3.
  if (availabilities[2].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[5].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[8].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (availabilities[11].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product available for home delivery. Click on the product image above to go to the IKEA page for the product to purchase.</i></center>";
  } else if (! availabilities[2].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[5].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[8].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[11].isInHomeDeliveryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // Counted it for you. 39 conditions.
} 