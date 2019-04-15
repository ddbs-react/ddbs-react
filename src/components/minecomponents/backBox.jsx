import React,{Component} from "react"


export default class BackBox extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            show : false
          })
        this.scrollTopClick=this.scrollTopClick.bind(this);
    }
   
    componentDidMount(){
        window.addEventListener('scroll' , ()=>{
            let scrollTop = document.documentElement.scrollTop || document.body/scrollTop;
            if(scrollTop > 400){
              this.setState({
                show : true
              })
            }else{
              this.setState({
                show : false
              })
            }
          })
    }

    scrollTopClick=(e)=> {
        e.preventDefault();
        let scrollTop = document.body.scrollTop;
        if(scrollTop>=100){
            this.setState({
                show:true   
            })
        }else{
            this.setState({
                show:false  
            })
        }       
    }
    
    goTo(){
        let scrollToTop = window.setInterval(function() {
          let pos = window.pageYOffset;
          if ( pos > 0 ) {
              window.scrollTo( 0, pos - 20 ); // how far to scroll on each step
          } else {
              window.clearInterval( scrollToTop );
          }
      }, 2);
      }

    render(){
        let { show } = this.state;
        return ( 
                <div className="backBox">
                    <div className="back">
                        <i className="iconfont iconkefu"></i>
                        <span>客服</span>
                    </div>
                    <div className="back" onClick={this.goTo}>
                        <i className="iconfont icondaodingbu"></i>
                        <span>顶部</span>
                    </div>
                </div>
            )
        }

}