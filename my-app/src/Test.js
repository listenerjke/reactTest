import React from 'react';
import {Button} from "@mui/material";

const Test = (props) => {
    const editNumber = () => {
        props.setNumber(!props.getNumber)
        console.log(props.getNumber)
    }
    return (
        <div>
            <Button onClick={()=>props.asd('1')} variant="text">Text</Button>
            <Button onClick={()=>props.asd('2')} variant="contained">Contained</Button>
            <Button onClick={editNumber} variant="outlined">Outlined</Button>
        </div>
    );
};

export default Test;