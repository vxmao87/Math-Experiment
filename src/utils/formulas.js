export default {

    quadFormula: function (a, b, c) {
        const num1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        const num2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        return [num1, num2];
    },

    cubeVolume: function (x) {
        return Math.pow(x, 3);
    },

    rectPrismVolume: function (a, b, c) {
        return a * b * c;
    },

    sphereVolume: function (r) {
        return (4/3) * Math.PI * Math.pow(r, 3);
    },

    pyramidVolume: function (l, w, h) {
        return (1/3) * l * w * h;
    },

    cylinderVolume: function (r, h) {
        return Math.PI * Math.pow(r, 2) * h;
    },

    coneVolume: function (r, h) {
        return (1/3) * Math.PI * Math.pow(r, 2) * h;
    },

    heronFormula: function (a, b, c) {
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    },

    squareArea: function (x) {
        return Math.pow(x, 2);
    },

    rectangleArea: function (l, w) {
        return l * w;
    },

    triangleArea: function (b, h) {
        return (1/2) * b * h;
    },

    circleArea: function (r) {
        return Math.PI * Math.pow(r, 2);
    },

    trapezoidArea: function (a, b, h) {
        return ((a + b) / 2) * h;
    },

    ellipseArea: function (a, b) {
        return Math.PI * a * b;
    }

};