import React, { Component, useReducer } from 'react';
class Variable extends Component {
    showInfoProduct(product) {
        if (product.status) {
            return <h5>
                name: {product.name} <br />
                id: {product.id} <br />
                price: {product.price} USD<br />
                status: {product.status ? 'Activated' : 'Pending'} <br />
            </h5>
        }
    }





    render() {
        const a = 'Variable';
        const b = 5;
        const c = 10;
        const product = {
            name: 'test',
            id: 1,
            price: 1500000,
            status: false
        }
        const productDetail = [{
            id: 1,
            name: 'test1',
            price: 1,
            status: true
        },
        {
            name: 'test2',
            id: 2,
            price: 2,
            status: false
        },
        {
            name: 'test3',
            id: 3,
            price: 3,
            status: true
        },
        {
            name: 'test4',
            id: 4,
            price: 4,
            status: false
        },
        {
            name: 'test5',
            id: 5,
            price: 5,
            status: true
        }];
        let element  = productDetail.map((product, index)=>{
            return <div key ={index}>
                <h2>Name: {product.name}</h2>
                <p>Price: {product.price}</p>
            </div>
        });
        return (
            <div>
                <h2>
                    a: {a}
                </h2>
                <h3>
                    b: {b}
                </h3>
                <h4>
                    b: {b} <br />
                    c: {c} <br />
                    b + c = {b + c}
                </h4>
                {this.showInfoProduct(product)}
                <br />
                {element}
            </div>
        );
    }
}

export default Variable;
