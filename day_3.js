const fs = require("fs");
const data = fs.readFileSync("day_3.txt", { encoding: "utf8", flag: "r" });
// console.log(data);

// Day 3, part 1 --------------------------------------------
var givenData = data.split("\n"); //split per line
var example = ["1111", "0101", "0010"];

function powerConsumption(array) {
  gamma = [];
  //   binaryOne = 0;
  //   binaryZero = 0;
  polarity = 0;
  for (let i = 0; i < array[0].length; i++) {
    // console.log(array[0]);
    // console.log(i + " index of i PLACEHOLDER");
    for (let j = 0; j < array.length; j++) {
      //   console.log(array);
      //   console.log("j = " + j);
      var thisRow = array[j];
      //   console.log(thisRow);
      var thisChar = thisRow[i];
      thisChar == 0 ? polarity-- : polarity++;
      //   console.log(thisChar);
      //   if (thisChar == 0) {
      //     binaryZero++;
      //   } else {
      //     binaryOne++;
      //   }
    }
    if (polarity > 0) {
      gamma.push(1);
    } else {
      gamma.push(0);
    }
    polarity = 0;
    // binaryOne = 0;
    // binaryZero = 0;
  }
  //   console.log(gamma);
  var epsilon = gamma.map((x) => (x == 0 ? 1 : 0));
  //   console.log(epsilon);
  console.log(parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2));
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

powerConsumption(givenData);

//Day 3, part 2 --------------------------------------------
function lifeSupportRating(origArray) {
  polarity = 0;
  var oxyGenArray = origArray;
  var co2ScrubArray = origArray;
  for (let column = 0; column < origArray[0].length; column++) {
    //12: indices 0-11
    for (let row = 0; row < oxyGenArray.length; row++) {
      var thisRow = oxyGenArray[row];
      var thisChar = thisRow[column];
      //   console.log(thisRow);
      thisChar == 0 ? polarity-- : polarity++;
    }
    if (polarity >= 0 && oxyGenArray.length > 1) {
      //   console.log(polarity);
      //every element beginning with 1
      oxyGenArray = oxyGenArray.filter((eachLine) => eachLine[column] === "1");
    } else if (polarity < 0 && oxyGenArray.length > 1) {
      oxyGenArray = oxyGenArray.filter((eachLine) => eachLine[column] === "0");
    }
    polarity = 0;
    for (let row = 0; row < co2ScrubArray.length; row++) {
      var thisRow = co2ScrubArray[row];
      var thisChar = thisRow[column];
      //   console.log(thisRow);
      thisChar == 0 ? polarity-- : polarity++;
    }
    if (polarity >= 0 && co2ScrubArray.length > 1) {
      //   console.log(polarity);
      //every element beginning with 1
      co2ScrubArray = co2ScrubArray.filter(
        (eachLine) => eachLine[column] === "0"
      );
    } else if (polarity < 0 && co2ScrubArray.length > 1) {
      co2ScrubArray = co2ScrubArray.filter(
        (eachLine) => eachLine[column] === "1"
      );
    }
    polarity = 0;
  }
  // console.log(oxyGenArray, co2ScrubArray);
  console.log(
    parseInt(oxyGenArray.join(""), 2) * parseInt(co2ScrubArray.join(""), 2)
  );
}

lifeSupportRating(givenData);
