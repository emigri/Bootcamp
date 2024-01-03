//WRITE YOUR CODE BELOW
var menu = {
  drinks: [
    {
      name: "coffee",
      price: 2.50,
      size: "lg",
      milk: "oat",
      hasIce: true,
      hasSugar: true,
    },
    {
      name: "tea",
      price: 2.00,
      size: "md",
      milk: "oat",
      hasIce: false,
      hasSugar: true,
    },
    {
      name: "hot chocolate",
      price: 3.00,
      size: "sm",
      milk: "cow",
      hasIce: false,
      hasSugar: false,
    }
  ],
  price: [2.50, 2.00, 3.00],
  size: ["lg", "md", "sm", "xs"],
  milk: ["oat", "cow", "lactose-free"],
  hasIce: [true || false],
  hasSugar: [true || false],
}
 console.log(menu.drinks[0].price)
 console.log(menu.drinks[1].price)