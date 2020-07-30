import React, { Component } from 'react';
import Header from './Header';


//In APP
return (
    <div>
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Product
                  name="Test1"
                  price="500000"
                  description="description 1"
                  image="https://vignette.wikia.nocookie.net/versus-compendium/images/7/7b/The_Knight_%28Hollow_Knight%29.png/revision/latest?cb=20190222174624"
                > Test1</Product>
                <Product
                  name="Test2"
                  price="500000"
                  description="description 2"
                  image = "https://i.pinimg.com/originals/a2/19/a1/a219a182fb14e229d9053336524c5a26.jpg"
                > Test2</Product>
                <Product
                  name="Test3"
                  price="500000"
                  description="description 3"
                  image = "https://i.pinimg.com/originals/c6/5b/ee/c65bee68682a39a94db76075c0e59acd.jpg"
                > Test3</Product>
                <Product
                  name="Test4"
                  price="500000"
                  description="description 4"
                  image = "https://m.media-amazon.com/images/M/MV5BYTljYjM2OGYtNzU5NC00ODBiLTk4Y2ItMmE0ZDUxMzJmYWU4XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
                > Test4</Product>
                <Product
                  name="Test5"
                  price="500000"
                  description="description 5"
                  image = "https://composerlarkin.com/wp-content/uploads/2019/03/hollow-knight-img-04.jpg"
                > Test5</Product>
                <Product
                  name="Test6"
                  price="500000"
                  description="description 6"
                  image = "https://cdn.shopify.com/s/files/1/0739/4997/products/hollowknight_front_02_1500x.progressive.jpg?v=1516822302"
                > Test6</Product>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );






















// In Product
class Product extends Component {
  render() {
    return (
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="thumbnail">
          <img src={this.props.image} alt="..."></img>
          <div class="caption">
            <h3>{this.props.children}</h3>
            <p>{this.props.price}</p>
            <p>{this.props.description}</p>
            <p>
              <a href="#" class="btn btn-primary" role="button">Mua</a>
              <a href="#" class="btn btn-default" role="button">Xem</a>
            </p>
          </div>
        </div>
      </div>

    );
  }
}

export default Product;
