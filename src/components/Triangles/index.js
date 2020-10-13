import React from "react";
import formulas from "../../utils/booleanFormulas";

function Triangles(props) {
    return (
        <div>
            {formulas.isRightTriangle(props.a, props.b, props.c) 
                ? "This is a right triangle!"
                : "This is NOT a right triangle."
            }
        </div>
    );
}

export default Triangles;