import React from "react";
import formulas from "../../utils/formulas";

function QuadFormula(props) {
    return (
        <div>
            <p>{props.a.includes("-") ? "-" : null}{props.a !== "1" ? props.a : null}x<sup>2</sup> {!props.b.includes("-") ? "+" : null} {props.b !== "1" ? props.b : null}x {!props.c.includes("-") ? "+" : null} {props.c !== "1" ? props.c : null}</p>
            <p>{formulas.quadFormula(props.a, props.b, props.c)[0]}</p>
            <p>{formulas.quadFormula(props.a, props.b, props.c)[1]}</p>
        </div>
    );
}

export default QuadFormula;