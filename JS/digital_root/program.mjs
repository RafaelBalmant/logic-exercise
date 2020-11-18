export default function digital_root(n) {
  const newNumber = Array.from(String(n)).reduce(
    (totalValue, currentValue) => Number(totalValue) + Number(currentValue)
  );
  if (String(newNumber).length > 1) {
    return digital_root(newNumber);
  }
  return Number(newNumber);
}

// call exemple
// digital_root(0);
