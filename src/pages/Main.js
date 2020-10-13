import React from "react";
import AreaFormula from "../components/AreaFormula";
import HeronFormula from "../components/HeronFormula";
import QuadFormula from "../components/QuadFormula";
import VolumeFormula from "../components/VolumeFormula";
import Triangles from "../components/Triangles";

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
                x={3}
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
            <AreaFormula 
                x={3}
                l={4}
                w={5}
                h={7}
                r={7}
                a={13}
                b={8}
                c={7}
            />
            <Triangles 
                a={3}
                b={4}
                c={5}
            />
            <Triangles 
                a={3}
                b={4}
                c={8}
            />
        </div>
    );
}

export default Main;