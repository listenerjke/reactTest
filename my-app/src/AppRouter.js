import React from 'react';
import {Route, Routes} from "react-router-dom";
import Test from "./Test";

const AppRouter = (props) => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={
                    <Test asd={props.asd} getNumber={props.number} setNumber={props.setNumber}/>
                }></Route>
            </Routes>
        </>
    );
};

export default AppRouter;