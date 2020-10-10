import React from "react";
import formulas from "../../utils/formulas";

function QuadFormula(props) {
    return (
        <div>
            <p>{props.a !== "1" ? props.a : null }x<sup>2</sup> + {props.b}x + {props.c}</p>
            <p>{formulas.quadFormula(props.a, props.b, props.c)[0]}</p>
            <p>{formulas.quadFormula(props.a, props.b, props.c)[1]}</p>
        </div>
    );
}

export default QuadFormula;