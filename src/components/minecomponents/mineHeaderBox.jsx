import React from "react"
import BgBox from './bgBox';
import PayList from './payList';

export default class MineHeaderBox extends React.Component {
    constructor(props){
        super(props);
        console.log("1")
        console.log(this.props.data);
    }
    render(){
        return (<div className="dangMineHeader">               
                    <BgBox data={this.props.data}/>                            
                    <PayList/>
                </div>)
    }
}