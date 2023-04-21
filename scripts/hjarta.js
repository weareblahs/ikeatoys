runall = async() => {
  // Setup (creds to @fillduck)
  const country = "my";
  // NOTE: for every part, the arrays keep changing if different product ID.
  const productID1 = "90136155"; //901.361.55
  const baseURL = "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID1 + "&expand=StoresList,Restocks,SalesLocations";
  const headers = { "x-client-id": "b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631" };
  const response = await fetch(`${baseURL}`, { headers });
  const { data } = await response.json();
  const availabilities = data;
  // Get all stock
  document.getElementById("detailsPhysical-" + productID1 + "-store1").innerHTML = availabilities[0].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store2").innerHTML = availabilities[1].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store3").innerHTML = availabilities[2].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store4").innerHTML = availabilities[3].availableStocks[0].quantity;
  // Get stock finish. Now onto getting restock data.
  // The below code is for product 1.
  if (!! availabilities[0].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store1").innerHTML = "Estimated restock date: " + availabilities[1].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[1].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[1].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store2").innerHTML = "Estimated restock date: " + availabilities[4].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[4].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[2].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store3").innerHTML = "Estimated restock date: " + availabilities[7].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[7].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[3].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store4").innerHTML = "Estimated restock date: " + availabilities[10].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[10].availableStocks[0].restocks[0].latestDate;
  }
  // Restock code finish. Now onto getting delivery info for all stores.
  // The below code is for product 1.
  if (availabilities[0].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[1].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[2].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[3].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[0].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[1].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[2].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[3].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
 // 9 conditions. Lesser than that blue shark.
} 