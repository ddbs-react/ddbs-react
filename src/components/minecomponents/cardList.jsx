import React from "react"
import CardItem from './cardItem';

export default class CardList extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (<ul className="cardList"> 
                {
                   this.props.data.map((c,cid)=>{
                   return <CardItem data={c} key={cid}/>    
                   }) 
                }                                                                  
            </ul>)
        }
}