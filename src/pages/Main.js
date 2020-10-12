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
                l={4}
                w={5}
                h={7}
                r={7}
                a={13}
                b={8}
                c={7}
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