console.log('Hello World!')

const myHeading = document.querySelector("h2");
myHeading.textContent = "Hello world!";

//single line comment
/* block multi line comment */

// coding challenge - will this code work?
// Yes, it will work

// naming standard is called camelCase is just in this case

const myNumber = 42;
let myString = 'Hello';
// myString = 43; not a good idea
//general code for variable declaration
// variables assign names to certain features of code and can be referenced throughout other places of the code



// Calculate Carbon Footprint Points

// 1. Count the members of your household.
const myHouseMembers = 6;
// 2. Consider the size of your home.
const myHouseSize = 7;
// 3. Evaluate your food choices. 
const myFoodChoices = 8;
// 4. Examine your water consumption. 
const myWater = 1;
// 5. Determine how many household purchases you make each year.
const myHouseholdPurchases = 6;
// 6. Consider how much waste you produce.
const myWaste = 20;
// 7. Identify the amount of waste that you recycle.
const myRecycled = 8;
// 8. Tally up your annual transportation scores.
const myTransport = 6;
// 9. Add up your points.
const cfpTotal = myHouseMembers + myHouseSize + myFoodChoices + myWater + myHouseholdPurchases + myWaste + myRecycled + myTransport
// 10. Write JS to update the rendered html (index.html with total ftp)