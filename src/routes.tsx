import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { Comics } from "./features";

const CustomRoutes = () => (
    <Fragment>
        <Routes>
            <Route path="/" element={<Comics />} />
        </Routes>
    </Fragment>
);

export default CustomRoutes;
