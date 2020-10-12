import React from "react";
import formulas from "../../utils/otherFormulas";

function QuadFormula(props) {
    return (
        <div>
            <p>{props.a < 0 ? "-" : null}{props.a !== 1 ? props.a : null}x<sup>2</sup> {!props.b < 0 ? "+" : null} {props.b !== 1 ? props.b : null}x {!props.c < 0 ? "+" : null} {props.c !== 1 ? props.c : null}</p>
            <p>{formulas.quadFormula(props.a, props.b, props.c)[0]}</p>
            <p>{formulas.quadFormula(props.a, props.b, props.c)[1]}</p>
        </div>
    );
}

export default QuadFormula;