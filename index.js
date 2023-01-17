// Code your solution here
const drivers = ["Mario", "Luigi", "Peach", "Daisy", "Bowser", "Toad"];

const driverObjs = [
    {
        name: "Mario",
        hometown: "Italy",
    }, 
    {
        name: "Luigi",
        hometown: "Italy",

    },
    {
        name: "Peach",
        hometown: "Mushroom Kingdom",
    },
    {
        name: "Toad",
        hometown: "Mushroom Kingdom",
    },
]

function findMatching(driverArray, name) {
    return driverArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
};

function fuzzyMatch(driverArray, letters) {
    return driverArray.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
};

function matchName(driverObjects, searchString) {
    return driverObjects.filter(driverObject => driverObject["name"].toLowerCase() === searchString.toLowerCase());
};