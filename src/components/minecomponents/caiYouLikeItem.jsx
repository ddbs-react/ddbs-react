import React,{Component} from "react"
import book03 from '../../assets/img/book03.jpg'


export default class CaiYouLikeItem extends Component {

      render(){
          return ( <li className="caiYouLikeItem">
                        <div className="caiYouLikeItemImg">
                            <img src={book03} alt=""/>
                        </div>
                        <div className="caiYouLikeText">
                            <h6>{this.goodsPressTime}</h6>
                            <div className="ziYing">
                                <span>{this.props.data.goodsPress}</span>
                                <span>{this.props.data.goodsISBN}</span>
                                <p>{this.props.data.goodsWordCount}</p>
                            </div>
                        </div>
                        <div className="price">
                            ￥<span>{this.props.data.goodsPrice}</span>
                        </div>
                    </li>)
          }
}