import React, { Component } from 'react';
import DangIndexPage from "./pagecomponents/DangIndexPage"
import Mine from "./pagecomponents/mine"
import DangShopCart from "./pagecomponents/dangShopCart"
import DangdangRecommend from "./pagecomponents/dangdang-recommend"
import DangFeiLei from "./pagecomponents/DangFeiLei"
import dangGoodsDetailHome from "./pagecomponents/dangGoodsDetailHome"
import login from "./pagecomponents/denglu"
import reg from "./pagecomponents/zhuce"
import DangOrder from "./pagecomponents/DangOrder"

import {BrowserRouter,Route} from "react-router-dom"


export default class App extends Component{
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Route path={"/"} exact component={DangIndexPage}/>
                    <Route path={"/mine"} component={Mine}/>
                    <Route path={"/cart"} component={DangShopCart}/>
                    <Route path={"/Recommend"} component={DangdangRecommend}/>
                    <Route path={"/DangFeiLei"} component={DangFeiLei}/>
                    <Route path={"/dangGoodsDetailHome"} component={dangGoodsDetailHome}/>
                    <Route path={"/login"} component={login}/>
                    <Route path={"/reg"} component={reg}/>
                    <Route path={"/DangOrder"} component={DangOrder}/>
                </BrowserRouter>
            </div>
        )
    }


}

