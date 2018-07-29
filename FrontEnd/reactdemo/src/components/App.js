import React, { Component } from 'react';
import Header from './header';

class App extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   dummyProducts: [
    //     {
    //       "_id": "59beb63ec53dbfd43ffcc3ac",
    //       "name": "iPhone X",
    //       "brand": "Apple",
    //       "price": 999,
    //       "stock": 100,
    //       "image": "https://s3.amazonaws.com/msi-tech/reactdemo/iphone-x-gallery2-2017.jpeg",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "59beb6bdc53dbfd43ffcc3ad",
    //       "name": "iPhone 8",
    //       "brand": "Apple",
    //       "price": 699,
    //       "stock": 100,
    //       "image": "https://s3.amazonaws.com/msi-tech/reactdemo/iphone8-gallery2-2017.jpeg",
    //       "__v": 0
    //     },
    //     {
    //       "_id": "59bec846e2f6d3d47802b513",
    //       "name": "iPhone 8 plus",
    //       "brand": "Apple",
    //       "price": 799,
    //       "stock": 900,
    //       "image": "https://s3.amazonaws.com/msi-tech/reactdemo/iphone8-gallery2-2017.jpeg",
    //       "__v": 0
    //     }
    //   ]
    // };
  }

  render() {
    return (
      <div className="container">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
