import React,{Component} from "react"
import DangDangYunTitle from '../commonalitycomponents/dangDangYunTitle';
import ReMenItem from './reMenItem';



export default class ReMenBox extends Component {
    constructor(props){
        super(props);
    }
      render(){
          return ( <div className="dangDangYun myZhuYe">
                        <DangDangYunTitle/>                       
                        <ul className="reMenList">
                        {
                            this.props.data.map((r,rid)=>{
                                return <ReMenItem data={r} key={rid}/>
                            })
                        }                      
                        </ul>
                    </div>)
          }0

}