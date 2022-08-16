function isRose(cat){
    // if(cat === "rose"){
    //     return "Hi Rose you are cute!";
    // }
    // else if(typeof cat === 'string' ){
    //     return `Hi ${cat}!`;
    // }
    // else{
    //     return 'Sorry please pass in a cat name.'
    // }

// return cat === "rose"?"Hi Rose you are cute!": `Hi ${cat}!`;
switch (cat){
    case 'rose':
        return "Hi rose, you  are cute!";
    case 'ted':
        return "Hi ted, nice to see you!";
    default:
        return `Hi ${cat}!`

}

}
// short hand for if else called a ternary
function userName(player){
userName === 'Defence' ? "Hello Defence, Keep rocking it!" : `Hello ${player}`;
    
}
userName("Hero");

// const age = 26;

// let isAdult = age >= 18 ? true : false;

// if(age >=18){
//     isAdult =true;
// }
// else{
//     isAdult = false;
// }
// age >= 18 ? (isAdult = true) : (isAdult = false);
// console.log(isAdult);
 
// console.log(isAdult);

// const age =13;

// let isAdult, canWork, canEnlist, canDrink;

// if(age >= 21){
//     isAdult = true;
//     canWork = true;
//     canEnlist = true;
//     canDrink = true;
// } else if(age >= 18){
//     isAdult = true;
//     canWork = true;
//     canEnlist = true;
// }
// else if(age >= 16){
//     canWork = true;
//     canEnlist = false;
//     isAdult = false;
//     canDrink = false;
// }
// else if(age <= 15){
//     // console.log("Not of age!");
//     canDrink = false;
//     canWork = false;
//     canEnlist = false;
//     isAdult = false;

// }
// else{

// }

// isAdult;
// canWork;
// canEnlist;
// canDrink;


// const age = 17;

// let isAdult, canWork, canEnlist, canDrink;

// if (age >= 16) {
//   canWork = true;

//   if (age >= 18) {
//     isAdult = true;
//     canEnlist = true;

//     if (age >= 21) {
//       canDrink = true;
//     }
//   }
// }

// canWork;

// const order = /*'cheeseburger'*/ 'hamburger';

// let ingredients;

// if (order === 'cheeseburger'){
//     ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
// }
// else if(order === 'hamburger'){
//     ingredients = 'bun, burger, lettuce, tomato, onion';
// } else if (order === 'malted') {
//     ingredients = 'milk, ice cream, malted milk powder';
// } else {
//     console.log("Sorry, that's not on the menu right now.");
// }



let order = 'cheeseburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}

