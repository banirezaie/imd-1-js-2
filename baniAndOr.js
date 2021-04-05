//you are going to a zoo

//if your age is 0-5 it's free
//if your age is 5-10 it's £10
//if your age is 10-65 it's £20
//if your age is 65+ it's free AGAIN

let age;
age = 199;

if ((age >= 0 && age < 5) || (age >= 65 && age < 200)) {
  console.log("it's Free for you");
} else if (age >= 5 && age < 10) {
  console.log("you are a child, it's just £10 for you");
} else if (age >= 10 && age < 65) {
  console.log("you are a senior, it's £20 for you");
} else {
  console.log("are you kidding? / please visit one of our colleague");
}