import React from "react"

export default class CardItem extends React.Component {
    constructor(props){
        super(props);              
    } 

    render(){
        return( <li>
           
                    <em>{this.props.data.goodsMaxNum}</em>
                    <span>{this.props.data.goodsLabel}</span>
                       
                </li>)
            }

}