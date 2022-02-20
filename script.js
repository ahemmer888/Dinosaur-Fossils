const url = "https://raw.githubusercontent.com/ahemmer888/Dinosaur-Fossils/main/Dinosaur%20Fossils%20(5).csv";

const dinoName = getColumn(url, 1);
const maximumAge = getColumn(url, 2);
const minimumAge = getColumn(url, 3);
const diet = getColumn(url, 12);
const motility = getColumn(url, 10);
const vision = getColumn(url, 11);
const countryName = getColumn(url, 15);
const regionName = getColumn(url, 16);
const yearFound = getColumn(url, 4);


//Finds the average age in millions of years of an inputted Dinosaur based upon the maximum and minimum possible age values of the fossil found
//name {string} - the name of a dinosaur, which checks if the name inputted matches that on the dinoName dinoList
//return {number} - the average of maximum and minimum ages of the dinosaur
function getDinoAvgAge(name) {
  name = name.toLowerCase();
  var avgAge;
  for (var i in dinoName) {
    if (dinoName[i].toLowerCase() == name) {
      avgAge = (Number(maximumAge[i]) + Number(minimumAge[i])) / 2;
      return (avgAge);
    }
  }
  return ("This input does not match any of the Dinosaur names logged.")
}

//Finds whether an inputted dinosaur name is a carnivore or not
//name {string} - the name of a dinosaur, which checks if the name inputted matches that on the dinoName dinoList
//return {string} - a phrase indicating whether the dinosaur is a carnivore or not, or a phrase saying the input does not match any of the Dinosaurs logged
function getDiet(name) {
  name = name.toLowerCase();
  var carnivoreDino = [];
  var nonCarnivoreDino = [];
  for (var i in dinoName) {
    if (dinoName[i].toLowerCase() == name) {
      if (diet[i] == "carnivore") {
        carnivoreDino.push("Your dinosaur is a carnivore.");
      } else {
        nonCarnivoreDino.push("Your dinosaur is not a carnivore.");
      }
    }
  }
  if (carnivoreDino.length > 0) {
    return (carnivoreDino);
  }
  if (nonCarnivoreDino.length > 0) {
    return (nonCarnivoreDino);
  }
  return ("This input does not match any of the Dinosaur names logged.");
}


//Finds the dinosaur that is all the deisgnated requirements: "fast-moving", "well-developed", and not a "carnivore"
//return {string} - the dinosaur name that fits the requirements (only one name outputted (could make a fun fact))
function getBestDinoNonCarn() {
  var bestDino = [];
  for (var i in motility) {
    if (motility[i] == "fast-moving" && vision[i] == "well-developed" && !(diet[i] == "carnivore")) {
      bestDino.push(dinoName[i]);
    }
  }
  return (bestDino);
}
console.log(getBestDinoNonCarn());
console.log("_____");


//Finds all dinosaurs that were discovered in a specific Country and Region inputted
//countries {string} - the name of a country, which checks if the country name inputted matches that on the countryName list
//regions {string} - the name of a region, which checks if the region name inputted matches that on the regionName list
//return {string} - all dinosaurs fossils found in the country and region the user inputted
function getPlace(countries, regions) {
  countries = countries.toLowerCase();
  regions = regions.toLowerCase();
  var dinoList = [];
  for (var i in countryName) {
    if (countryName[i].toLowerCase() == countries && regionName[i].toLowerCase() == regions) {
      dinoList.push(dinoName[i]);
    }
  }
  if (dinoList.length > 0) {
    return dinoList;
  }
  return ("This input does not have any corresponding dinosaurs OR the input is not valid.");
}


//Finds the difference in the maximum and minimum ages of an inputted dinosaur, how precise the scientists estamation of when the fossils age, larger number has more uncertainty of age versus a smaller has less uncertainty (margin of error)
//name {string} - the name of a dinosaur, which checks if the name inputted matches that on the dinoName dinoList
//return {number} - the differnce between the maximum and minimum ages inputted as a number
function getDifOfYears(name) {
  name = name.toLowerCase();
  var difYears;
  //var milConverted;
  for (var i in dinoName) {
    if (dinoName[i].toLowerCase() == name) {
      //milConverted = Number(minimumAge[i]) * 1000000;
      difYears = Number(maximumAge[i]) - Number(minimumAge[i]);
      return (difYears);
    }
  }
  return ("This input does not match any of the Dinosaur names logged.");
}



//Sets the columns, tables, etc. (not my creation)
function getColumn(url, columnNumber) {
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send(null);
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}
//returns the specified column from a 2D Array
function getCol(matrix, col) {
  var column = [];
  for (var i = 1; i < matrix.length - 1; i++) {
    column.push(matrix[i][col]);
  }
  return column;
}
