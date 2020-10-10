import React from "react";
import QuadFormula from "../components/QuadFormula";
import VolumeFormula from "../components/VolumeFormula";

function Main() {
    return (
        <div>
            <QuadFormula 
                a="1"
                b="10"
                c="25"
            />
            <VolumeFormula 
                value="3"
            />
        </div>
    );
}

export default Main;