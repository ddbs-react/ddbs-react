import React, { Component } from 'react';
import ZhuCeHeader from '../components/zhuce/zhuceHeader'
import ZhuCeSence from '../components/zhuce/zhuceSence'



class ZhuCe extends Component {
  render() {
    return (
      <div className="shengB">
        <ZhuCeHeader/>
        <ZhuCeSence/>
      </div>
    );
  }
}

export default ZhuCe;