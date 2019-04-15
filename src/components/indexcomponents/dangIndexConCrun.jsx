import React,{ Component } from 'react'
import DangIndexConCrunName from "./dangIndexConCrunName"
import new0103 from "../../assets/img/new0103.png"
import ebookCxb from "../../assets/img/ebook-cxb.png"
import mianff1103 from "../../assets/img/mianff1103.png"
import tejia1103 from "../../assets/img/tejia1103.png"
import ebookYdq from "../../assets/img/ebook-ydq.png"

export default class DangIndexConCrun extends Component{
    constructor(props) {
         super(props);
         this.state= {
            CrunName:[
                {
                    name:"畅销榜",
                    ImgUrl:ebookCxb
                },
                {
                    name:"新书榜",
                    ImgUrl:new0103
                },
                {
                    name:"免费",
                    ImgUrl:mianff1103
                },
                {
                    name:"促销",
                    ImgUrl:tejia1103
                },
                {
                    name:"阅读器",
                    ImgUrl:ebookYdq
                }
            ]
        }
    }
    render(){
         return(
            <div className="dangIndexConCrun">
                {
                    this.state.CrunName.map((item,index)=>{
                        return <DangIndexConCrunName key={index} data={item} />
                    })
                }
            </div>
        )
    }
}