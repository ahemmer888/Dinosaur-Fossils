# Dinosaur-Fossils
The following functions can be used to find out interesting and useful information about Dinosaur Fossils and the Dinossaurs they once were.
#
##### Finds the average age in millions of years of an inputted Dinosaur based upon the maximum and minimum possible age values of the fossil found.
###### @param name {string} - the name of a dinosaur, which checks if the name inputted matches that on the dinoName dinoList
###### @return {number} - the average of maximum and minimum ages of the dinosaur
**`function getDinoAvgAge(name)`**
#

##### Finds whether an inputted dinosaur name is a carnivore or not
###### @param name {string} - the name of a dinosaur, which checks if the name inputted matches that on the dinoName dinoList
###### @param return {string} - a phrase indicating whether the dinosaur is a carnivore or not, or a phrase saying the input does not match any of the Dinosaurs logged
**`function getDiet(name)`**
#

##### Finds the dinosaur that is all the deisgnated requirements: "fast-moving", "well-developed", and not a "carnivore"
###### @return {string} - the dinosaur name that fits the requirements
**`function getBestDinoNonCarn()`**
#

##### Finds all dinosaurs that were discovered in a specific Country and Region inputted
###### @param countries {string} - the name of a country, which checks if the country name inputted matches that on the countryName list
###### @param regions {string} - the name of a region, which checks if the region name inputted matches that on the regionName list
###### @return {string} - all dinosaurs fossils found in the country and region the user inputted
**`function getPlace(countries, regions)`**
#

##### Finds the difference in the maximum and minimum ages of an inputted dinosaur, how precise the scientists estamation of when the fossils age, larger number has more uncertainty of age versus a smaller has less uncertainty (margin of error)
###### @param name {string} - the name of a dinosaur, which checks if the name inputted matches that on the dinoName dinoList
###### @return {number} - the differnce between the maximum and minimum ages inputted as a number
**`function getDifOfYears`**
#
