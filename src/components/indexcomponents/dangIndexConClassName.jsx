import React,{ Component } from 'react' 

export default class DangIndexConClassName extends Component{
    render(){
        return(
            <div className="dangIndexConClassName">
                <div className="dangIndexConClassNamePic">
                    <img src={this.props.data.ImgUrl} alt="" />
                </div>
                <p className="dangIndexConClassNameText">{this.props.data.ClassName}</p>
            </div>
        )
    }

}