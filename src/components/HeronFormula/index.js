import React from "react";
import formulas from "../../utils/formulas";

function HeronFormula(props) {
    return (
        <div>
            <p>{formulas.heronFormula(props.a, props.b, props.c)}</p>
        </div>
    );
}

export default HeronFormula;