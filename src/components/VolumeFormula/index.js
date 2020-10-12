import React from "react";
import formulas from "../../utils/volumeFormulas";

function VolumeFormula(props) {
    return (
        <div>
            <p>Cube: {formulas.cubeVolume(props.x)}</p>
            <p>Rectangular prism: {formulas.rectPrismVolume(props.a, props.b, props.c)}</p>
            <p>Sphere: {formulas.sphereVolume(props.r)}</p>
            <p>Pyramid: {formulas.pyramidVolume(props.l, props.w, props.h)}</p>
            <p>Cylinder: {formulas.cylinderVolume(props.r, props.h)}</p>
            <p>Cone: {formulas.coneVolume(props.r, props.h)}</p>
        </div>
    );
}

export default VolumeFormula;