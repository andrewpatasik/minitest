/*
Tolong buat satu array / list dari 1 sampai 100.
Print semua angka ini dalam urutan terbalik, tetapi ada beberapa peraturan : 

1. Jangan print angka bilangan prima.
2. Ganti angka yang dapat dibagi dengan angka 3 dengan text "Foo".
3. Ganti angka yang dapat dibagi dengan angka 5 dengan text "Bar".
4. Ganti angka yang dapat dibagi dengan angka 3 dan 5 dengan text "FooBar".
5. Print angka menyamping tidak kebawah.
*/

/*
====================
==== HOW TO RUN ====
====================

1. Open terminal
2. Navigate to index.js directory
3. execute node index.js
*/

function printReverseFooBar() {
  let currentValue = 100;
  let end = 1;
  let result = "";

  function checkPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i < currentValue; i++) {
      if (currentValue % i === 0) return false;
    }

    return true;
  }

  while (currentValue >= end) {
    // check prime first if true then skip current step otherwise continue step
    if (!checkPrime(currentValue)) {
      //  if currentValue % 3 AND % 5 = 0 then print "FooBar"
      if (currentValue % 3 === 0 && currentValue % 5 === 0) {
        result = result.concat("FooBar", ", ");
      }
      // if currentValue % 3 === 0 AND currentValue % 5 !== 0 then print "Foo"
      else if (currentValue % 3 === 0 && currentValue % 5 !== 0) {
        result = result.concat("Foo", ", ");
      }
      // if currentValue % 3 !== 0 AND currentValue % 5 === 0 the print "Bar"
      else if (currentValue % 3 !== 0 && currentValue % 5 === 0) {
        result = result.concat("Bar", ", ");
      } else {
        result = result.concat(currentValue, ", ");
      }
    }

    currentValue--;
  }

  return result;
}

console.log("============================ Foo Bar ========================");
console.log(printReverseFooBar());
