const findBestEmployee = function(employees) {
  const arrayOfEmployees = Object.entries(employees);

  let bestScore = arrayOfEmployees[0];

  for (const number of arrayOfEmployees) {
    if (number[1] > bestScore[1]) {
      bestScore = number;
    }
  }
  return `${bestScore[0]}`;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
