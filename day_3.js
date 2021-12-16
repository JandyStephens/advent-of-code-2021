const fs = require("fs");
const data = fs.readFileSync("day_3.txt", { encoding: "utf8", flag: "r" });
// console.log(data);

// Day 3, part 1
var givenData = data.split("\n"); //split per line
var example = ["1111", "0101", "0010"];

function powerConsumption(array) {
  gamma = [];
  binaryOne = 0;
  binaryZero = 0;
  for (let i = 0; i < array[0].length; i++) {
    for (let j = 0; j < array.length; j++) {
      var thisRow = array[j];
      var thisChar = thisRow[i];
      // console.log(thisChar);
      if (thisChar == 0) {
        binaryZero++;
      } else {
        binaryOne++;
      }
    }
    if (binaryOne > binaryZero) {
      gamma.push(1);
    } else {
      gamma.push(0);
    }
    binaryOne = 0;
    binaryZero = 0;
  }
  console.log(gamma);
  var epsilon = gamma.map((x) => (x == 0 ? 1 : 0));
  console.log(epsilon);
}

// function powerConsumption(array) {
//   gamma = [];
//   epsilon = [];
//   binaryOne = 0;
//   binaryZero = 0;
//   for (let i = 0; i < array.length; i++) {
//     separated = array[i].split(""); //each line now array of ind int
//     console.log(seperated);
//     // console.log(separated[0]);
//     for (let j = 0; j < separated.length; j++) {
//       if (separated[j] == 0) {
//         binaryZero++;
//       } else {
//         binaryOne++;
//       }
//       //compare binaryOne and bindaryZero
//     }
//   }
//   // convert gamma and epsilon from binary to integer
//   // multiply gamma and epsilon
// }

// powerConsumption(givenData);
powerConsumption(example);
