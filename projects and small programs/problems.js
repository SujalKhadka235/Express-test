const dot = (string) => {
  const resultarray = Array.from(string);
  return resultarray.splice(0, string.length / 2).join("");
};
const result = dot("hello my name is sujal");
console.log(result + "...");
