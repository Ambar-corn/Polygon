const purchase = {
  Electronics: [
    { name: "Laptop", price: 1500 },
    { name: "Keyboard", price: 100 },
    { name: "Smartphone", price: 800 },
    { name: "Monitor", price: 300 },
  ],
  Textile: [
    { name: "Bag", price: 50 },
    { name: "T-shirt", price: 25 },
    { name: "Jacket", price: 120 },
  ],
  Groceries: [
    { name: "Apples", price: 5 },
    { name: "Bread", price: 2 },
    { name: "Milk", price: 3 },
  ],
  Furniture: [
    { name: "Chair", price: 75 },
    { name: "Table", price: 200 },
  ],
};
const log = console.log;
log(Object.entries(purchase));
