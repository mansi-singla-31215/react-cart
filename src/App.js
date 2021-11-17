import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {   // to add state
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 1,
                img: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/2_a25aff7a-b5c4-4565-a111-6e1ce2d5b5f0.png?v=1624268771',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile Phone',
                qty: 10,
                img: 'data:image/jpeg;base64,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',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 4,
                img: 'https://m.media-amazon.com/images/I/81KoSSAwH2L._SL1500_.jpg',
                id: 3
            }
        ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
    console.log('inc quantity', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
        products
    })
  }
  handleDecreaseQuantity = (product) => {
    console.log('dec quantity', product);
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products
    })
  }
  handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);  // [{}]

    this.setState({
        products: items
    });
  }

  getCartCount = () => {
    const {products} = this.state;
    
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    })

    return count;

  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }

  render() {
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
         />
         <div style={{padding: 10, fontSize: 20} } >TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
