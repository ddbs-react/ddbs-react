import React,{ Component } from 'react'
import DangIndexConClassName from "./dangIndexConClassName"

export default class DangIndexConClasIfyBoxTop extends Component{
    render(){
        return(
            <div className="dangIndexConClasIfyBoxTop">
                {
                    this.props.data.map((item,index)=>{
                        return <DangIndexConClassName data={item} key={index} />
                    })
                }
            </div>
        )
    }

}