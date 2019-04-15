import React, { Component } from 'react';
import DangIndexConBnner from "./DangIndexConBnner"
import DangIndexConTodayBook from "./dangIndexConTodayBook"
import DangIndexAdverBox from "./dangIndexAdverBox"
import DangIndexConCrun from "./dangIndexConCrun"
import DangIndexConClasIfyBox from "./dangIndexConClasIfyBox"
import DangIndexConSeckillBox from "./dangIndexConSeckillBox"
import DangIndexConClassIfyBoxAll from "./dangIndexConClassIfyBoxAll"

export default class DangIndexCen extends Component{
    render() {
        return(
            <div className={"dangIndexContent"}>
                <DangIndexConBnner/>
                <DangIndexConTodayBook/>
                <DangIndexAdverBox/>
                <DangIndexConCrun/>
                <DangIndexConClasIfyBox/>
                {/*专题活动组件 可复用到推荐或满额减*/}
                <DangIndexConSeckillBox data={this.props.data} />
                {/*今日必读等*/}
                <DangIndexConClassIfyBoxAll/>
            </div>
        )
    }

}