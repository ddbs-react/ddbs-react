import React from "react";
import "../../assets/css/content.css";
import DangdangRecommendSection from '../DangdangRecommendComponents/DangdangRecommendSection'
import DangdangReccommendMyNewsSeciton from '../DangdangRecommendComponents/DangdangReccommendMyNewsSeciton'

export default class DangdangRecommendContent extends React.Component {

    render(){
        return(
            <div className="DangdangRecommendContent">
                <div className="DangdangRecommendContent-small">
                    <DangdangRecommendSection/>
                    <DangdangRecommendSection/>
                    <DangdangRecommendSection/>
                    <DangdangReccommendMyNewsSeciton/>
                </div>
            </div>
        );
    }
}