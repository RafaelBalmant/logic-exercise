export default function oddOrEven(array) {
  const sum = array.length
    ? array.reduce((accumulator, currentValue) => accumulator + currentValue)
    : 0;
  return sum % 2 === 0 ? "even" : "odd";
}

// call example
// console.log(JSON.stringify(oddOrEven([])));
