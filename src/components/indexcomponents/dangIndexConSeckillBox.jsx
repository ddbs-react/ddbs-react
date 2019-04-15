import React,{ Component } from 'react'
import DangIndexConSecKilGoods from "./dangIndexConSecKilGoods"
import DangIndexConBoxTitliBox from "./dangIndexConBoxTitliBox"
import DangIndexConSecKilSeeMore from "./dangIndexConSecKilSeeMore"
import Loading from "../commonalitycomponents/loding"
import {Link} from "react-router-dom";

export default class DangIndexConSeckillBox extends Component{
    constructor(props){
        super(props)
        this.state= {
            data: "null"
        }
    }
componentDidMount() {
    this.setState({
        data:this.props.data,
    })
}

    render(){
        if(this.state.data=="null"){
            return <Loading></Loading>
        }else{
            return(
                <div className="dangIndexConSeckillBox">
                    {/*活动标题*/}
                    <DangIndexConBoxTitliBox />
                    {/*-----------------------------*/}
                    <div className="dangIndexHideScrollBox">
                        <div className="dangIndexConSecKillGoodsBox">
                            <div className="dangIndexConSecKillGoodsList">
                                {/*每件商品*/}
                                {
                                    this.props.data.gdslist.map((item,index)=>{
                                        console.log("1")
                                        console.log(index)
                                        return <Link to={{
                                            pathname: '/dangGoodsDetailHome',
                                            search: `?id=${this.props.data.gdslist[index].goodsId}`,
                                            state: { fromDashboard: true }
                                        }}>
                                            <DangIndexConSecKilGoods data={item} index={index} />
                                        </Link>

                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/*点击查看更多*/}
                    <DangIndexConSecKilSeeMore/>
                </div>
            )
        }
    }
}