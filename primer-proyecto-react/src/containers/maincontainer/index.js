import React, { Component } from 'react';
import {
    ParagraphComponent
    //,TitleComponent
} 
from "../../components";

const funcEjemplo = () =>{
    alert("Cool");
}

class MainContainer extends Component {
    render() {
        return (
            <div>
                <ParagraphComponent 
                    testing={null}
                    title={'MainContainer'}
                />                
            </div>
        );
    }
}

export default MainContainer;