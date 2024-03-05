class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;

    processProductSale(name){
      this.stock.forEach(item => {
        if(item.name === name) {
          if(item.count > 0) {
            item.count--;
            this.revenue += item.price;
          }
        }
      });
    }

  }


  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }
}

module.exports = Store;
