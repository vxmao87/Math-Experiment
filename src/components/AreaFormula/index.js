import React from "react";
import formulas from "../../utils/areaFormulas";

function AreaFormula(props) {
    return (
        <div>
            <p>Square: {formulas.squareArea(props.x)}</p>
            <p>Rectangle: {formulas.rectangleArea(props.l, props.w)}</p>
            <p>Triangle: {formulas.triangleArea(props.b, props.h)}</p>
            <p>Circle: {formulas.circleArea(props.r)}</p>
            <p>Trapezoid: {formulas.trapezoidArea(props.a, props.b, props.h)}</p>
            <p>Ellipse: {formulas.ellipseArea(props.a, props.b)}</p>
            <p>Cube: {formulas.cubeArea(props.x)}</p>
            <p>Rectangular prism:{formulas.rectPrismArea(props.a, props.b, props.c)}</p>
            <p>Sphere: {formulas.sphereArea(props.r)}</p>
            <p>Cylinder: {formulas.cylinderArea(props.r, props.h)}</p>
            <p>Cone: {formulas.coneArea(props.r, props.h)}</p>
        </div>
    );

}

export default AreaFormula;