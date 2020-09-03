function digital_root(n) {
    const newNumber = Array.from(String(n)).reduce((totalValue, currentValue) => Number(totalValue) + Number(currentValue));
    if(String(newNumber).length > 1 ){        
      return digital_root(newNumber);
    }
    return Number(newNumber);
  }
  
  
  return digital_root(0);