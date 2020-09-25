function zeros(number) {
	if(!number){
    return 0;
	}
	const list =  Array.from({length: number}, (v,k) => k + 1 );
	let numbersZero = 0;
	const numbersEndFive = list.filter( value => String(value)[String(value).length -1] === "5");
	const numbersPar = list.filter( value => value % 2 === 0);
	const multiValues = [...numbersEndFive, ...numbersPar].map( value => {
		console.log(value);
		return Number(numbersEndFive) * Number(numbersPar);
	})
	console.log(multiValues);
	// String(factorial).split("").reduce(
	// 		(lastValue, currentValue, index, array) => {
	// 			if(numbersZero && currentValue !== "0"){
	// 				return numbersZero = 0;
	// 			}
	// 			if(currentValue === "0" && (array[index + 1] === "0" ||
	// 			array[index + 1] === undefined ) && lastValue !== "0"){
	// 				return numbersZero++
	// 			}
	// 			return currentValue;
	// 		}
	// )
	// return numbersZero;
}


console.log(zeros(69))
