import React,{Component} from "react"
import MineHeaderBox from '../components/minecomponents/mineHeaderBox';
import DangDangYun from '../components/minecomponents/dangDangYun';
import FireImg from '../components/minecomponents/fireImg';
import GuanZhuBox from '../components/minecomponents/guanZhuBox';
import ZhuYeBox from '../components/minecomponents/zhuYeBox';
import BaoMaBox from '../components/minecomponents/baoMaBox';
import ZiDingYiBox from '../components/minecomponents/ziDingYiBox';
import ReMenBox from '../components/minecomponents/reMenBox';
import CaiYouLikeBox from '../components/minecomponents/caiYouLikeBox';
import AllPageFootBox from '../components/commonalitycomponents/allPageFootBox';
import BackBox from '../components/minecomponents/backBox';
import "../assets/css/dangMine.css"
// 引入数据
import data from "../data/mineData"
const cardList=data.cardList;
const bookPings = data.bookPingList;
const caiYouLikes = data.caiYouLikeList;
const baoMas = data.baoMaList;
const reMens = data.reMenList;


export default class Mine extends Component {
    constructor(props){
        super(props);
        this.state={
            dataCard:cardList,
            dataBook:bookPings,
            dataLike:caiYouLikes,
            dataBaoMa:baoMas,
            dataReMen:reMens,
        }
    }
      render(){
          return (
              <div className="minePage">    
                    <MineHeaderBox data={this.state.dataCard}/>
                    <DangDangYun/>
                    <FireImg/>
                    <GuanZhuBox/>
                    <ZhuYeBox data={this.state.dataBook}/>
                    <BaoMaBox data={this.state.dataBaoMa}/>
                    <ZiDingYiBox/>
                    <ReMenBox data={this.state.dataReMen}/>
                    <FireImg/>
                    <CaiYouLikeBox data={this.state.dataLike}/>                    
                    <AllPageFootBox/>
                    <BackBox/>
                 </div>
              )
          }

}
