import React,{Component} from "react"


export default class ReMenItem extends Component {
    constructor(props){
        super(props);
    }
      render(){
          return ( <li className="reMenItem">
                        <div className="reMenItemLeft">
                            <span>促</span>
                            <p>{this.props.data.goodsDes}</p>
                        </div>
                        <i className="iconfont iconyouxiang"></i>
                    </li>)
          }
}