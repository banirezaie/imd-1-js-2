// it is NOT important, just in case you see it anywhere

const date = new Date();
// console.log(date);
const day = date.getDay()
// console.log(day);

if ( day === 6 ) {
    console.log('this is if statement and here is Saturday')
} else if ( day === 1 ) {
    console.log('Monday')
}

switch (day) {
  case 6:
    console.log("Friday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Saturday");
    break;
}