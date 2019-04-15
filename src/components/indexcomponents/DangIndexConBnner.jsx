import React, { Component } from 'react';
import Swiper from "../../../node_modules/swiper/dist/js/swiper.min"
import "../../../node_modules/swiper/dist/css/swiper.min.css"
import IndexBnner_3 from "../../assets/img/IndexBnner_3.jpg"
import IndexBnner1 from "../../assets/img/IndexBnner1.jpg"
import IndexBnner4 from "../../assets/img/IndexBnner4.jpg"
import nnx750x262 from "../../assets/img/nnx750x262.jpg"
import wd0409750262 from  "../../assets/img/wd0409-750-262.jpg"
import yueeurenwu20 from "../../assets/img/yueeurenwu20-750-192.jpg"
import zydy48 from "../../assets/img/zydy48-750-262.jpg"

export default class DangIndexConBnner extends Component{
componentDidMount() {
        new Swiper(".swiper-container",{
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render() {
        return(
            <div className="dangIndexConBnner">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src={IndexBnner_3} alt=""/></div>
                        <div className="swiper-slide"><img src={IndexBnner1} alt=""/></div>
                        <div className="swiper-slide"><img src={IndexBnner4} alt=""/></div>
                        <div className="swiper-slide"><img src={nnx750x262} alt=""/></div>
                        <div className="swiper-slide"><img src={wd0409750262} alt=""/></div>
                        <div className="swiper-slide"><img src={yueeurenwu20} alt=""/></div>
                        <div className="swiper-slide"><img src={zydy48} alt=""/></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }


}