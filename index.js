const mass = {
  elec: [{ price: 42, name: "antonio" }],
  text: [{ br: 123, jfs: "sdfsf" }],
};
let masscop = mass;
console.log(mass);
masscop = {
  elec: [{ price: 2, name: "antonio" }],
  text: [{ br: 2, jfs: "sdfsf" }],
};
console.log(mass);
