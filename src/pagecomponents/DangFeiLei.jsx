import React, { Component } from 'react';
import FeiLeiHeader from '../components/DangFeiLei/FeiLeiHeader';
import FeiLeiConent from '../components/DangFeiLei/FeiLeiConent';
import AllPageFootBox from '../components/commonalitycomponents/allPageFootBox';

class DangFeiLei extends Component{
       render(){
        return (
            <div className="bigFeiLei">
                <FeiLeiHeader/>
                <FeiLeiConent/>
                <AllPageFootBox/>
            </div>
        );
    }
}

export default DangFeiLei;