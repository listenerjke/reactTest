import React, {useState} from 'react';
import Test from "./Test";
import Headers from "./Headers";
import {Container} from "@mui/material";
import AppRouter from "./AppRouter";

const App = () => {
    const asd = (number) => {
        console.log(number)
    }
    const [number,setNumber] = useState(false)
    return (
        <>
            <Headers/>
            <Container>
                <AppRouter asd={asd}></AppRouter>
            </Container>
        </>
    );
};

export default App;