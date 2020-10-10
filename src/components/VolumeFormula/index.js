import React from "react";
import formulas from "../../utils/formulas";

function VolumeFormula(props) {
    return (
        <div>
            <p>{formulas.cubeVolume(props.value)}</p>
        </div>
    );
}

export default VolumeFormula;