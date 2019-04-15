import React,{ Component } from 'react'
import DangIndexConClasIfyBoxTop from "./dangIndexConClasIfyBoxTop"
import ebookF1 from "../../assets/img/ebook-fl.png"
import pinang from "../../assets/img/pinang.jpg"

export default class DangIndexConClasIfyBox extends Component{
    constructor(props) {
         super(props);
         this.state={
             classData:[
                 [
                     {
                         ClassName:"全部分类",
                         ImgUrl:ebookF1
                     },
                     {
                         ClassName:"小说",
                         ImgUrl:pinang
                     },
                     {
                         ClassName:"文学",
                         ImgUrl:pinang
                     },
                     {
                         ClassName:"励志/经营",
                         ImgUrl:pinang
                     },
                     {
                         ClassName:"社科",
                         ImgUrl:pinang
                     },
                 ],
                 [
                     {
                         ClassName:"生活",
                         ImgUrl:pinang
                     },
                     {
                         ClassName:"童书",
                         ImgUrl:pinang
                     },
                     {
                         ClassName:"教育",
                         ImgUrl:pinang
                     },
                     {
                         ClassName:"科技",
                         ImgUrl:pinang
                     },
                     {
                         ClassName:"杂志/期刊",
                         ImgUrl:pinang
                     },
                 ]
             ]
        }
    }

    render(){
        return(
            <div className="dangIndexConClasIfyBox">
                {
                    this.state.classData.map((item,index)=>{
                       return <DangIndexConClasIfyBoxTop data={item} key={index}/>
                    })
                }
            </div>
        )
    }

}