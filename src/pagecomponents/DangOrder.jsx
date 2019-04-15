import React, { Component } from 'react';
import DangOrderHeader from '../components/dangOrderComponents/dangOrderHeader';
import DangOrderSecBigBox from '../components/dangOrderComponents/dangOrderSecBigBox';
import AllPageFootBox from '../components/commonalitycomponents/allPageFootBox';
class DangOrder extends Component {
  render() {
    return (
      <div className="orderQ">
        <DangOrderHeader/>
        <DangOrderSecBigBox/>
        <AllPageFootBox/>
      </div>
    );
  }
}

export default DangOrder;