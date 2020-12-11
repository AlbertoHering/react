import React from 'react';
import { Button } from 'react-bootstrap';

const ParagraphComponent = ({title, testing}) => {

    testing!==null?
    console.log("YES")
    :console.log("NO")

    return (
        /*<div>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corrupti accusamus similique vel soluta nulla tempora reprehenderit numquam recusandae! Recusandae iste harum odit alias sequi saepe consequuntur inventore distinctio unde. 
        </p>
        <button onClick={funcEjemplo}>Click Me!</button>
        </div>*/
        <div>
            <h1>{title}</h1>
            <Button variant="primary">Primary</Button>
            <Button variant="warning">Warning</Button>
        </div>
        

    );
};

export default ParagraphComponent;