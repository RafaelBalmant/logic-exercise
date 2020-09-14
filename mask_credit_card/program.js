const formatString = (string) => {
  const rules = [
    {
      number: 4,
      sum: 0
    },
    {
      number: 5,
      sum: 4
    }
  ];
  if (string.length >= 4) {
    const stringArray = rules.map((value) => {
      const currentString = string.slice(value.sum, string.length);
      const regex = new RegExp(".{1," + value.number + "}");
      return currentString.length && currentString.match(regex)[0];
    });
    const finalString = stringArray.filter(Number).join(" ");
    return finalString;
  }
  return string;
};

const valueTeste = "09682735998";

document.getElementById("app2").innerHTML = `${valueTeste} => Final Value`;

document.getElementById("app").innerHTML = `${formatString(
  valueTeste
)} => Start value`;

