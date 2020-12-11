import React, { Component } from 'react';

import {
    ParagraphComponent
} 
from "../../components";

const funcEjemplo = () =>{
    alert("Cool");
}

class SecondaryContainer extends Component {
    render() {
        return (
            <div>                
                <ParagraphComponent title={'SecondaryContainer'}/>
            </div>
        );
    }
}

export default SecondaryContainer;