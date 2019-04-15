import React,{Component} from "react"
import banner from '../../assets/img/banner.jpg';



export default class FireImg extends Component {

      render(){
          return ( <div className="fireImg">
                        <a href="#"><img src={banner} alt=""/></a>
                    </div>)
          }

}