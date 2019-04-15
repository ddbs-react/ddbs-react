import React,{Component} from "react"
import img02 from '../../assets/img/img02.jpg';
import DangDangYunTitle from "../commonalitycomponents/dangDangYunTitle"


export default class DangDangYun extends Component {

      render(){
          return ( <div className="dangDangYun">
                        <DangDangYunTitle/>
                        <div className="dangDangYunImg">
                            <a href="#"><img src={img02} alt=""/></a>
                        </div>
                    </div>)
          }

}