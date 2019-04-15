import React, { Component } from 'react';


export default class DangIndexHeader extends Component{
    render() {
            const dangIndexHeader={
                dangIndexHeader:{
                    "width": "100%",
                    "height":" .78rem",
                   " backgroundColor": "#ffffff",
                    "display": "flex",
                    "padding":" .17rem .12rem",
                    "justifyContent":" space-between",
                    "boxSizing":" border-box",
                    "backgroundColor":"#fff"
                },
                dangIndexHeaderMenu:{
                    width: ".2rem",
                    height:" .2rem",
                    marginTop: ".12rem",
                    backgroundColor: "#ffffff",
                },
                dangIndexHeaderSea:{
                    width: "2.5rem",
                    height: ".45rem",
                    backgroundColor: "#f8f3f7",
                    borderRadius: "40px",
                    display: "flex",
                },
                dangIndexHeaderSeaBig:{
                    width: ".16rem",
                    height: ".23rem",
                    marginLeft: ".1rem",
                    marginTop: ".13rem",
                    marginRight:" .09rem",
                    fontSize: ".23rem"
                },
                dangIndexHeaderSeaInp:{
                    width: "1.86rem",
                    height: "100%",
                    backgroundColor: "#f8f3f7",
                    borderRadius: "40px",
                    color: "#f8f3f7",
                    fontSize: ".16rem",
                    border: "none",
                    outline: "none",
                    lineHeight: ".45rem"
                },
                dangIndexHeaderSao:{
                    width:" .18rem",
                    height:" .25rem",
                    marginTop: ".1rem",
                    marginRight: ".1rem"
                }
        };
        return(
            <div style={dangIndexHeader.dangIndexHeader}>
                <div style={dangIndexHeader.dangIndexHeaderMenu}>
                    <span className="iconfont iconcaidan"></span>
                </div>
                <div style={dangIndexHeader.dangIndexHeaderSea}>
                    <div style={dangIndexHeader.dangIndexHeaderSeaBig}>
                        <span className="iconfont iconsearch_light"></span>
                    </div>
                    <input type="text" style={dangIndexHeader.dangIndexHeaderSeaInp} placeholder="麦富迪宠物199减100"></input>
                        <div style={dangIndexHeader.dangIndexHeaderSao}>
                            <span className="iconfont iconsaoyisao"></span>
                        </div>
                </div>
                <div className="dangIndexHeaderRedBox"></div>
                <div className="dangIndexHeaderMsg">
                    <span className="iconfont icondaipingjia"></span>
                </div>
            </div>
        )
    }


}