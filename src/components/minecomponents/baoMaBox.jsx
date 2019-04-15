import React,{Component} from "react"
import FuBiaoTitle from './fuBiaoTitle';
import BaoMaItem from './baoMaItem';
import DangDangYunTitle from "../commonalitycomponents/dangDangYunTitle"



export default class BaoMaBox extends Component {
    constructor(props){
        super(props);
    }
      render(){
          return ( <div className="dangDangYun myZhuYe">
                       <DangDangYunTitle/>
                        <FuBiaoTitle/>
                        <ul className="guanZhuList baoMaList">
                        {
                            this.props.data.map((m,mid)=>{
                                return <BaoMaItem data={m} key={mid}/>
                            })
                        }                          
                        </ul>
                    </div>)
          }

}