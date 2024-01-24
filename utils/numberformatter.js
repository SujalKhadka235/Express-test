// const display = (solution) => {
//   return solution;
// };
const fixNumber = (number) => {
  const arr = number.toString().split("");
  for (let i = arr.length - 3; i > 0; i -= 3) {
    arr[i - 1] = arr[i - 1] + ",";
  }
  const result = arr.join("");
  return result;
};
fixNumber(10000000000);
module.exports = { fixNumber };
// const fixNumber = (num) => {
//   const string = String(num);
//   const seperatedarr = string.split("");
//   let count = 0;
//   let newstring = "";
//   for (let i = 0; i < seperatedarr.length; i++) {
//     newstring += seperatedarr.pop();
//     count++;
//     if (count === 3) {
//       newstring += ",";
//       count = 0;
//     }
//   }
//   newstring = newstring.split("").reverse().join("");
//   return newstring;
// };
