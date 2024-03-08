class Product {
  constructor(id, name, cost) {
    this.id = id;
    this.name = name;
    this.cost = cost;
  }

  getName() {
    return this.name;
  }

  getCost() {
    return this.cost;
  }

  getId() {
    return this.id;
  }
}

class ShoppingCart {
  static instance = undefined;
  
  constructor() {
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }

  deleteById(id) {
    this.products = this.products.filter((value) => value.getId() !== id);
  } 

  static getInstance() {
    if(!ShoppingCart.instance) {
      ShoppingCart.instance = new ShoppingCart();
    }

    return ShoppingCart.instance;
  }
}

function app() {
  const shoppingCart1 = ShoppingCart.getInstance();
  const shoppingCart2 = ShoppingCart.getInstance();
  const shoppingCart3 = ShoppingCart.getInstance();

  const product1 = new Product(10, "Café", 20.0);
  const product2 = new Product(2, "Laptop", 8600.0);

  shoppingCart1.add(product1);
  shoppingCart2.add(product2);

  console.log(shoppingCart1, shoppingCart2, shoppingCart3);
}

app();