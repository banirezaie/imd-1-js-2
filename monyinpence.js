
function moneyInPence(money){
    console.log(`${money} => $ ${money/100}`);
}
moneyInPence(199);


//code bani
function money(pence){
    let pound =pence/100;
    console.log(`£${pound}`);
}

money(199);
money(23498);
money(387);
//**********************/

function money(pence){
    let pound =pence/100;
    return `₤${pound}`;
}
console.log(money(199));

money(23498);
money(387);