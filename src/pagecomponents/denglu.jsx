import React, { Component } from 'react';
import DengLuHeader from '../components/denglu/dengluHeader'
import DengLuContent from '../components/denglu/DengLuContent'
import DengLuFooter from '../components/denglu/dengluFooter'



class DengLu extends Component {
  render() {
    return (
      <div className="shengB">
        <DengLuHeader/>
        <DengLuContent/>
        <DengLuFooter/>
      </div>
    );
  }
}

export default DengLu;