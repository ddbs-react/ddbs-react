import React,{ Component } from 'react'

export default class DangIndexConCrunName extends Component{
    render(){
        return(
            <div className="dangIndexConCrunName">
                <div className="dangIndexConCrunNamePic">
                    <img src={this.props.data.ImgUrl} alt="" />
                </div>
                <div className="dangIndexConCrunNameText">
                    {this.props.data.name}
                </div>
            </div>
        )
    }

}