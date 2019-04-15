import React,{ Component } from 'react'
import Loading from "../commonalitycomponents/loding"

export default class DangIndexConSecKilGoods extends Component{
    constructor(props){
        super(props)
        this.state={
            data:"null"
        }
    }
    componentDidMount() {
            this.setState({
                data:this.props.data
            })
    }
    render(){
            if(this.state.data==="null" || this.state.data===undefined){
                    return Loading
            }else{
                console.log(this.state.data)
                let BookInmag={
                    bg:{
                        "width":"100%",
                        "heiht":"100%"
                    }
                }
                return(
                    <div className="dangIndexConSecKilGoods">
                        <div className="dangIndexConSecKilGoodsPic" >
                            <img src={"http://10.35.167.87:3000/upload/"+this.props.data.goodsPic} style={BookInmag.bg} alt=""/>
                            <img src="" alt="" className="dangIndexConSecilGoodsActive"/>
                        </div>
                        <p className="dangIndexConSecKilGoodsName">{this.props.data.goodsDes}</p>
                        <p className="dangIndexConSecKilGoodWriter">{this.props.data.goodsAuthor}</p>
                        <span className="dangIndexConSecKilGoodsPrice">{this.props.data.goodsPrice}</span>
                        <span className="dangIndexConSecKilGoodsPriceBef">{this.props.data.goodsOriginalPrice}</span>
                    </div>
                )
            }
    }

}