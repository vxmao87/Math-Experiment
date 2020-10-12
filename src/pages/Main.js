import React from "react";
import HeronFormula from "../components/HeronFormula";
import QuadFormula from "../components/QuadFormula";
import VolumeFormula from "../components/VolumeFormula";

function Main() {
    return (
        <div>
            <QuadFormula 
                a={1}
                b={10}
                c={25}
            />
            <QuadFormula 
                a={1}
                b={-15}
                c={50}
            />
            <QuadFormula 
                a={1}
                b={-11/2}
                c={-3}
            />
            <VolumeFormula 
                value={3}
            />
            <HeronFormula 
                a={5}
                b={8}
                c={10}
            />
        </div>
    );
}

export default Main;