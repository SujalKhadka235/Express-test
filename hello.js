const check = (phone) => {
  const result = String(phone);
  if (result.length < 10 || result.length > 10) return false;
  return result.startsWith("98");
};
console.log(check(9841234444));
console.log(check(+2323));
