// Answer to the problem number 1 :

function seerToMon(seer) {
  // check input
  if (typeof seer != "number") {
    return "Please enter a number.";
  } else if (seer < 0) {
    return "please enter a positive number";
  } else {
    let monCount = seer / 40;
    return monCount;
  }
}

const amount = 80;
const mon = seerToMon(amount);
console.log(mon);

// Answer to the problem number 2 :

function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
  // check input
  if (typeof shirtQuantity != "number") {
    return "Please enter right amount.";
  } else if (shirtQuantity < 0) {
    return "Please enter positive amount .";
  }
  if (typeof pantQuantity != "number") {
    return "Please enter right amount.";
  } else if (pantQuantity < 0) {
    return "Please enter positive amount .";
  }
  if (typeof shoeQuantity != "number") {
    return "Please enter right amount.";
  } else if (shoeQuantity < 0) {
    return "Please enter positive amount .";
  } else {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;

    //  Price calculation

    const shirtPrice = shirtQuantity * perShirtPrice;
    const pantPrice = pantQuantity * perPantPrice;
    const shoePrice = shoeQuantity * perShoePrice;

    //  Total sell price

    const totalsell = shirtPrice + pantPrice + shoePrice;
    return totalsell;
  }
}
const totalamount = totalSales(1, 1, 1);
console.log(totalamount);

// Answer to the problem number 3 :

function deliveryCost(shirtAmount) {
  // check input
  if (shirtAmount < 0) {
    return "please enter a positive number..";
  } else {
    var cost = 0;
    if (shirtAmount <= 100) {
      cost = shirtAmount * 100;
    } else if (shirtAmount <= 200) {
      let shirt100 = 100 * 100;
      let shirtdue = shirtAmount - 100;
      let shirt200 = 80 * shirtdue;
      cost = shirt100 + shirt200;
    } else {
      let shirt100 = 100 * 100;
      let shirt200 = 80 * 100;
      let shirtdue = shirtAmount - 200;
      let after200 = 50 * shirtdue;
      cost = shirt100 + shirt200 + after200;
    }
  }
  return cost;
}

let cost = deliveryCost(100);
console.log(cost);

// Answer to the problem number 4 :

function perfectFriend(friendsName) {
  // check input
  if (typeof friendsName != "object") {
    return "Please enter a name with an array...";
  }
  for (let i = 0; i < friendsName.length; i++) {
    const element = friendsName[i];
    if (element.length == 5) {
      return element;
    }
  }
}

const names = ["alif", "rakib", "rony", "joy", "kanon"];
const myfriendName = perfectFriend(names);
console.log(myfriendName);
