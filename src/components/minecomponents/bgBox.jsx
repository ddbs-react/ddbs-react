import React,{Component} from "react"
import BgBoxPhoto from './bgBoxPhoto';
import CardList from './cardList';


export default class BgBox extends Component {
      constructor(props){
        super(props);
        console.log("2");
        console.log(this.props.data);
      }

      render(){
          return (<div className="bgBox">
                    <BgBoxPhoto/> 
                     <CardList data={this.props.data}/>                  
                 </div>)
            }
}