import React from "react"
import DangOrderSecBox from './dangOrderSecBox';
import DangOrderSecBox1 from './dangOrderSecBox1';
import DangOrderSecBox2 from './dangOrderSecBox2';
import DangOrderSecBox3 from './dangOrderSecBox3';
import DangOrderSecBox4 from './dangOrderSecBox4';

export default class dangOrderSecBigBox extends React.Component {

    render() {
        return (
            <div className="dangOrderSecBox">
                    <DangOrderSecBox/>
                    <DangOrderSecBox1/>
                    <DangOrderSecBox2/>
                    <DangOrderSecBox3/>
                    <DangOrderSecBox4/>
            </div>
        );
    }

}