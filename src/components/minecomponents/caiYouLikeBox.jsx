import React,{Component} from "react"
import DangDangYunTitle from '../commonalitycomponents/dangDangYunTitle';
import CaiYouLikeItem from './caiYouLikeItem';



export default class CaiYouLikeBox extends Component {

      render(){
          return (<div className="dangDangYun caiYouLike">
                        <DangDangYunTitle/>

                        <ul className="caiYouLikeList">
                        {
                            this.props.data.map((l,lid)=>{
                                return  <CaiYouLikeItem data={l} key={lid}/>
                            })
                        }                           
                        </ul>
                    </div>)
          }

}