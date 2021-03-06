const fs = require("fs");

const data = fs.readFileSync("day_2.txt", { encoding: "utf8", flag: "r" });
console.log(data);

/**
 *
 * @param {string[]} array
 */

// Day 2, part 2 --------------------------------------------
var givenArr = data.split("\n");

function plannedCourse(array) {
  forwardNum = 0;
  depth = 0;

  // loop through one line at a time: split on space (does that make it an array in an array?), if 0 index = 'forward', add 1 index to forward variable. if 0 index = "up"/"down", subtract/add value of 1 index to depth variable.

  for (let i = 0; i < array.length; i++) {
    splitUnit = array[i].split(" "); //["forward", "2"]
    indInt = parseInt(splitUnit[1]);
    if (splitUnit[0] === "forward") {
      forwardNum += indInt;
    } else if (splitUnit[0] === "up") {
      depth -= indInt;
    } else if (splitUnit[0] === "down") {
      depth += indInt;
    }
  }
  // multiply final forward and depth
  console.log(forwardNum * depth);
}

plannedCourse(givenArr);

// Day 2, part 2 --------------------------------------------
function complexCourse(array) {
  horizontalPos = 0;
  depth = 0;
  aim = 0;
  for (let i = 0; i < array.length; i++) {
    splitUnit = array[i].split(" "); //["forward", "2"]
    indInt = parseInt(splitUnit[1]);
    if (splitUnit[0] === "forward") {
      horizontalPos += indInt;
      depth += aim * indInt;
    } else if (splitUnit[0] === "up") {
      aim -= indInt;
    } else if (splitUnit[0] === "down") {
      aim += indInt;
    }
  }
  // multiply final forward and depth
  console.log(horizontalPos * depth);
}

complexCourse(givenArr);
