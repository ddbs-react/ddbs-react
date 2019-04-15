import React,{Component} from "react"
import book01 from '../../assets/img/book01.jpg'



export default class BookPingItem extends Component {
    constructor(props){
        super(props);
    }

      render(){
          return (<li className="bookPingItem">
                    <div className="bookPingItemLeft">
                        <img src={book01} alt=""/>
                        <div className="bookPingItemText">
                            <h6>{this.props.data.goodsDes}</h6>
                            <span>{this.props.data.goodsAuthor}</span>
                        </div>
                    </div>
                    <div className="bookPingItemRight">
                        前往
                    </div>
                </li>)
          }

}