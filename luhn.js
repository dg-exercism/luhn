//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (number) => {
  if (number.trim().length === 1 || number.match(/[a-z]/gi)) {
    return false;
  } else {
    let cleanedNumber = number.replace(/\s/gi, '').split('').map(char => Number(char)).reverse();
    let luhnCheck = cleanedNumber.reduce((total, integer, i) => {
      if (i % 2) {
        return integer * 2 > 9 ? total + (integer * 2 - 9) : total + (integer * 2);
      } else {
        return total + integer
      }
    }, 0); 
    return luhnCheck % 10 === 0 
  }
};
