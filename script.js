//call back function, call back hell

// const stocks = {
//   fruits: ["orange", "apple", "grapes"],
// };

// let order = (fruits, production) => {
//   setTimeout(() => {
//     console.log(`${stocks.fruits[fruits]} was selected`);
//   }, 2000);
//   production();
// };
// let production = () => {
//   setTimeout(() => {
//     console.log("order received. starting production");
//     setTimeout(() => {
//       console.log("the fruit has been choopped");
//     }, 2000);
//   }, 3000);
// };

// order(0, production);
///--------------------------------------------------------------------
let stocks = {
  fruits: ["orange", "apple", "grapes"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "sticks"],
  toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;
// let order = (time, work) => {
//   return new Promise((resolve, reject) => {
//     if (is_shop_open) {
//       setTimeout(() => {
//         resolve(work());
//       }, time);
//     } else {
//       reject(console.log("our shop closed"));
//     }
//   });
// };
// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
//   .then(() => {
//     return order(0, () => {
//       console.log("production has started");
//     });
//   })
//   .then(() => {
//     return order(2000, () => console.log("the fruit was chopped"));
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("start the machine");
//     });
//   })
//   .then(() => {
//     return order(2000, () => {
//       console.log(`ice cream placed on ${stocks.holder[0]}`);
//     });
//   })
//   .then(() => {
//     return order(3000, () => {
//       console.log(`${stocks.toppings[0]} was selected`);
//     });
//   })
//   .then(() => {
//     return order(1000, () => {
//       console.log("ice cream was served");
//     });
//   })

//   .catch(() => {
//     console.log("customer left");
//   })
//   .finally(() => {
//     console.log("day ended shop is closed");
//   });
//-------------------------------------------------promise finished next await--------
function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}
async function kitchen() {
  try {
    await time(2000);
    console.log("place order");
    await time(3000);
    console.log("start the production");
  } catch (error) {
    console.log("customer left");
  } finally {
  }
  console.log("day ended, shop is closed");
}
kitchen();
