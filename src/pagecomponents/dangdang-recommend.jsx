import React, { Component } from 'react';
import DangdangRecommendHeader from '../components/DangdangRecommendComponents/DangdangRecommendHeader';
import DangdangRecommendContent from '../components/DangdangRecommendComponents/DangdangRecommendContent';
import AllPageFootBox from "../components/commonalitycomponents/allPageFootBox"

class DangdangRecommend extends Component {
  render() {
    return (
      <div className="shengB">
        <DangdangRecommendHeader/>
        <DangdangRecommendContent/>
        <AllPageFootBox/>
      </div>
    );
  }
}
export default DangdangRecommend;