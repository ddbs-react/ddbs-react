import {createStore} from "../../node_modules/redux"

let initState ={ data:{}}
let get=()=>{
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function () {
        //该回调函数会被依次调用4次
        console.log(httpRequest.readyState);
        if (httpRequest.readyState === 4) {
            //请求已完成
            if (httpRequest.status === 200) {
                //http状态为200
                console.log(httpRequest.response);
                let data = JSON.parse(httpRequest.response);
                console.log(data);
                return data
            }
        }
        let url = "http://10.35.167.87:3000/getgds";
        httpRequest.open('GET', url, true);
        httpRequest.setRequestHeader("Content-Type", "application/json");
        httpRequest.send(null);
    }
}
let reducer = (state,action)=>{
    let {data} = state;
    switch (action.type) {
        case "GET":
            // state->num state->num
            return {data:get()}
            //新的状态
            break;
        default:
            return state; //返回默认state
            break;
    }
}
let store = createStore(reducer,initState) //创建一个共享的仓库
export default store