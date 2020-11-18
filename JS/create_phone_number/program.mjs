export default function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})?(\d{3})?(\d{4})/, "($1) $2-$3");
}

// call exemple
// console.log(JSON.stringify(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])));
