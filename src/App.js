import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Variable from './components/Variable';
import Prop from './components/Prop';
class App extends Component {
  render() {
    let products = [{
      "id": 1,
      "name": "test1",
      "price": 100,
      "description": "desc1",
      "image": "https://vignette.wikia.nocookie.net/versus-compendium/images/7/7b/The_Knight_%28Hollow_Knight%29.png/revision/latest?cb=20190222174624",
      "status": true,
    }, {
      "id": 2,
      "name": "test2",
      "price": 200,
      "description": "desc2",
      "image": "https://i.pinimg.com/originals/a2/19/a1/a219a182fb14e229d9053336524c5a26.jpg",
      "status": true,
    }, {
      "id": 3,
      "name": "test3",
      "price": 200,
      "description": "desc3",
      "image": "https://i.pinimg.com/originals/c6/5b/ee/c65bee68682a39a94db76075c0e59acd.jpg",
      "status": false,
    }, {
      "id": 4,
      "name": "test4",
      "price": 200,
      "description": "desc4",
      "image": "https://m.media-amazon.com/images/M/MV5BYTljYjM2OGYtNzU5NC00ODBiLTk4Y2ItMmE0ZDUxMzJmYWU4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
      "status": false,
    }, {
      "id": 5,
      "name": "test5",
      "price": 200,
      "description": "desc5",
      "image": "https://composerlarkin.com/wp-content/uploads/2019/03/hollow-knight-img-04.jpg",
      "status": true,
    }, {
      "id": 6,
      "name": "test6",
      "price": 200,
      "description": "desc6",
      "image": "https://cdn.shopify.com/s/files/1/0739/4997/products/hollowknight_front_02_1500x.progressive.jpg?v=1516822302",
      "status": true,
    }];

    let elements = products.map((product, index) => {
      let result = '';
      if (product.status) {
        result = <Product
          key={product.id}
          price={product.price}
          description={product.description}
          image={product.image}

        >
          {product.name}
        </Product>;
        return result;
      }
      return result;

    })
    return (
      <div>
        <div>
          <Header />
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  {elements}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
