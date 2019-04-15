import React,{ Component } from 'react' 

export default class DangIndexConClassIfyBoxTop extends Component{
    render(){
        return(
            <div className="dangIndexConClassIfyBoxTop">
                <div className="dangIndexConClassIfyBoxTopBookPic">
                    <img src="../img/1901118276_cc_cover.jpg" alt=""/>
                        <img src="../img/mej-2x.png" alt=""/>
                </div>
                <div className="dangIndexConClassIfyBoxTopBookText">
                    <p className="dangIndexConClassIfyTopBoxBookName">平凡的世界</p>
                    <p className="dangIndexConClassIfyTopBoxBookWiki">路遥</p>
                    <p className="dangIndexConClassIfyTopBoxBookWikiText">路遥(1949-1992)原名王卫国,1949年12月3日生于陕西榆林市清涧县一个贫困的农民家庭</p>
                    <p className="dangIndexConClassIfyTopBoxBookPrice">59.9</p>
                </div>
            </div>
        )
    }

}