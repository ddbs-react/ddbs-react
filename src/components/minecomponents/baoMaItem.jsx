import React,{Component} from "react"
import bao01 from '../../assets/img/bao01.jpg'


export default class BaoMaItem extends Component {
    constructor(props){
        super(props);
    }
      render(){
          return ( <li className="baoMaItem">
                        <img src={bao01} alt=""/>
                        <span>￥<i>{this.props.data.goodsPrice}</i></span>
                    </li>)
          }
}
