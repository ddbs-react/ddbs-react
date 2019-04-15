import React,{ Component } from 'react'
import DangIndexConBoxTitliBox from "./dangIndexConBoxTitliBox"
import DangIndexConClassIfyBoxTop from "./dangIndexConClassIfyBoxTop"
import DangIndexConClassIfyBoxCen from "./dangIndexConClassIfyBoxCen"
import DangIndexConSecKilSeeMore from "./dangIndexConSecKilSeeMore"
import {Link} from "react-router-dom";

export default class DangIndexConClassIfyBoxAll extends Component{
    render(){
        return(
            <div className="dangIndexConClassIfyBoxAll">
                <DangIndexConBoxTitliBox/>
                <Link to={"/dangGoodsDetailHome"}>
                    <DangIndexConClassIfyBoxTop/>
                </Link>
                <DangIndexConClassIfyBoxCen/>
                <DangIndexConSecKilSeeMore/>
            </div>
        )
    }

}