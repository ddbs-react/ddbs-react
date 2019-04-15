import React, { Component } from 'react';
import ShopCartHeader from '../components/dangShopCartComponents/shopCartHeader';
import ShopCartContent from '../components/dangShopCartComponents/shopCartContent';
import ShopCartFooter from '../components/dangShopCartComponents/shopCartFooter';


class DangShopCart extends Component {
  render() {
    return (
      <div className="shengB">
        <ShopCartHeader/>
        <ShopCartContent/>
        <ShopCartFooter/>
      </div>
    );
  }
}

export default DangShopCart;