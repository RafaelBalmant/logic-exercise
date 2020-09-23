function oddOrEven(array) {
	const sum = array.length ? array.reduce((accumulator, currentValue) => accumulator + currentValue): 0;
    return sum % 2 === 0 ? "even" : "odd"; 
}
console.log(JSON.stringify(oddOrEven([])));

