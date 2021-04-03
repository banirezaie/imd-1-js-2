//For ‘stop’ phrase, it should be ‘red’
//For ‘go’ phrase, it should be ‘green’
//For ‘any other situations’, it should be ‘purple’
//For ‘slow’ phrase, it should be ‘yellow’

let phrase = "askjhpaoisypandokl,";

if (phrase === "stop") {
  console.log("red");
} else if (phrase === "go") {
  console.log("green");
} else if (phrase === "slow") {
  console.log("yellow");
} else {
  console.log("purple");
}

if (phrase.length > 10) {
  console.log("you phrase is not existed");
}