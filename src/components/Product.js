import React, { Component } from 'react';
import Header from './Header';
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
