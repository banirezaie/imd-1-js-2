// it is NOT important, just in case you see it anywhere

const date = new Date();
const day = date.getDay()

switch (day) {
    case 1:
        console.log( 'Monday' )
        break;
    case 2:
        console.log( 'Saturday' )
        break;
    case 6:
        console.log( 'Friday' )
        break;
}