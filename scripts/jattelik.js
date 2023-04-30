runall = async() => {
  // Setup (creds to @fillduck)
  const country = "my";
  // NOTE: for every part, the arrays keep changing if different product ID.
  const productID1 = "20471216"; //204.028.31 - DJUNGELSKOG bear
  const productID2 = "30471206"; //304.028.40 - DJUNGELSKOG orangutan
  const productID3 = "40471197"; //504.085.82 - DJUNGELSKOG tiger
  const productID4 = "60471219"; //604.028.34 - DJUNGELSKOG lion
  const productID5 = "00471203"; //704.028.43 - DJUNGELSKOG panda
  const productID6 = "10471212"; //404.028.49 - DJUNGELSKOG python
  const productID7 = "70479984"; //904.028.37 - DJUNGELSKOG lion cub
  //IKEA API result (array):
  //204.712.16 - 2,  9, 16, 23
  //304.712.06 - 3, 10, 17, 24
  //404.711.97 - 4, 11, 18, 25
  //604.712.19 - 5, 12, 19, 26
  //004.712.03 - 0,  7, 14, 21
  //104.712.12 - 1,  8, 15, 22
  //704.799.84 - 6, 13, 20, 27
  const baseURL = "https://api.ingka.ikea.com/cia/availabilities/ru/" + country + "?itemNos=" + productID1 + "," + productID2 + "," + productID3 + "," + productID4 + "," + productID5 + "," + productID6 + "," + productID7 + "&expand=StoresList,Restocks,SalesLocations";
  const headers = { "x-client-id": "b6c117e5-ae61-4ef5-b4cc-e0b1e37f0631" };
  const response = await fetch(`${baseURL}`, { headers });
  const { data } = await response.json();
  const availabilities = data;
  // Get all stock
  document.getElementById("detailsPhysical-" + productID1 + "-store1").innerHTML = availabilities[2].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store2").innerHTML = availabilities[9].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store3").innerHTML = availabilities[16].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID1 + "-store4").innerHTML = availabilities[23].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store1").innerHTML = availabilities[3].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store2").innerHTML = availabilities[10].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store3").innerHTML = availabilities[17].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID2 + "-store4").innerHTML = availabilities[24].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store1").innerHTML = availabilities[4].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store2").innerHTML = availabilities[11].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store3").innerHTML = availabilities[18].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID3 + "-store4").innerHTML = availabilities[25].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store1").innerHTML = availabilities[5].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store2").innerHTML = availabilities[12].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store3").innerHTML = availabilities[19].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID4 + "-store4").innerHTML = availabilities[26].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID5 + "-store1").innerHTML = availabilities[0].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID5 + "-store2").innerHTML = availabilities[7].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID5 + "-store3").innerHTML = availabilities[14].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID5 + "-store4").innerHTML = availabilities[21].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID6 + "-store1").innerHTML = availabilities[1].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID6 + "-store2").innerHTML = availabilities[8].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID6 + "-store3").innerHTML = availabilities[15].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID6 + "-store4").innerHTML = availabilities[22].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID7 + "-store1").innerHTML = availabilities[6].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID7 + "-store2").innerHTML = availabilities[13].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID7 + "-store3").innerHTML = availabilities[20].availableStocks[0].quantity;
  document.getElementById("detailsPhysical-" + productID7 + "-store4").innerHTML = availabilities[27].availableStocks[0].quantity;
  // Get stock finish. Now onto getting restock data.
  // The below code is for product 1.
  if (!! availabilities[2].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store1").innerHTML = "Estimated restock date: " + availabilities[1].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[1].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[9].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store2").innerHTML = "Estimated restock date: " + availabilities[4].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[4].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[16].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store3").innerHTML = "Estimated restock date: " + availabilities[7].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[7].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[23].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID1 + "-store4").innerHTML = "Estimated restock date: " + availabilities[10].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[10].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 2.
  if (!! availabilities[3].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store1").innerHTML = "Estimated restock date: " + availabilities[0].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[0].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[10].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store2").innerHTML = "Estimated restock date: " + availabilities[3].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[3].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[17].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store3").innerHTML = "Estimated restock date: " + availabilities[6].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[6].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[23].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID2 + "-store4").innerHTML = "Estimated restock date: " + availabilities[9].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[9].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 3.
  if (!! availabilities[4].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store1").innerHTML = "Estimated restock date: " + availabilities[2].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[11].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store2").innerHTML = "Estimated restock date: " + availabilities[5].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[18].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store3").innerHTML = "Estimated restock date: " + availabilities[8].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[25].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID3 + "-store4").innerHTML = "Estimated restock date: " + availabilities[11].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 4.
  if (!! availabilities[5].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store1").innerHTML = "Estimated restock date: " + availabilities[2].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[12].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store2").innerHTML = "Estimated restock date: " + availabilities[5].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[19].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store3").innerHTML = "Estimated restock date: " + availabilities[8].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[26].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID4 + "-store4").innerHTML = "Estimated restock date: " + availabilities[11].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 5.
  if (!! availabilities[0].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID5 + "-store1").innerHTML = "Estimated restock date: " + availabilities[2].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[7].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID5 + "-store2").innerHTML = "Estimated restock date: " + availabilities[5].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[14].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID5 + "-store3").innerHTML = "Estimated restock date: " + availabilities[8].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[21].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID5 + "-store4").innerHTML = "Estimated restock date: " + availabilities[11].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 6.
  if (!! availabilities[1].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID6 + "-store1").innerHTML = "Estimated restock date: " + availabilities[2].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[8].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID6 + "-store2").innerHTML = "Estimated restock date: " + availabilities[5].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[15].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID6 + "-store3").innerHTML = "Estimated restock date: " + availabilities[8].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[22].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID6 + "-store4").innerHTML = "Estimated restock date: " + availabilities[11].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // The below code is for product 7.
  if (!! availabilities[6].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID7 + "-store1").innerHTML = "Estimated restock date: " + availabilities[2].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[2].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[13].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID7 + "-store2").innerHTML = "Estimated restock date: " + availabilities[5].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[5].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[20].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID7 + "-store3").innerHTML = "Estimated restock date: " + availabilities[8].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[8].availableStocks[0].restocks[0].latestDate;
  } if (!! availabilities[27].availableStocks[0].restocks) {
    document.getElementById("Restocks-" + productID7 + "-store4").innerHTML = "Estimated restock date: " + availabilities[11].availableStocks[0].restocks[0].earliestDate + " to " + availabilities[11].availableStocks[0].restocks[0].latestDate;
  }
  // Restock code finish. Now onto getting delivery info for all stores.
  // The below code is for product 1.
  if (availabilities[2].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[9].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[16].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[23].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[2].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[9].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[16].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[23].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID1 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 2.
  if (availabilities[3].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[10].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[17].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[24].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[3].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[10].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[17].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[24].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID2 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 3.
  if (availabilities[4].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[11].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[18].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[25].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[4].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[11].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[18].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[25].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID3 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 4.
  if (availabilities[5].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[12].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[19].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[26].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[5].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[12].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[19].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[26].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID4 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 5.
  if (availabilities[0].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[7].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[14].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[21].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[0].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[7].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[14].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[21].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID5 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 6.
  if (availabilities[1].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[8].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[15].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[22].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[1].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[8].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[15].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[22].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID6 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // The below code is for product 7.
  if (availabilities[6].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[13].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[20].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (availabilities[27].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delsuccess><i>DELIVERY INFORMATION: Product might be available for home delivery. Check IKEA website by clicking on the product image above.</i></center>";
  } else if (! availabilities[6].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[13].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[20].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else if (! availabilities[27].isInCashAndCarryRange) {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delfail><i>DELIVERY INFORMATION: Product unavailable for home delivery.</i></center>";
  } else {
    document.getElementById("detailsPhysical-" + productID7 + "-HomeDelivery").innerHTML = "<center class=delunavail><i>No information from IKEA.</i></center>";
  }
  // Counted it for you. 63 conditions.
} 