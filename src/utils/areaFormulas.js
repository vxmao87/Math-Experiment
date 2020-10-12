export default {
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
    },

    cubeArea: function (x) {
        return 6 * Math.pow(x, 2);
    },

    rectPrismArea: function (a, b, c) {
        return (2 * a * b) + (2 * b * c) + (2 * c * a);
    },

    sphereArea: function (r) {
        return 4 * Math.PI * Math.pow(r, 2);
    },

    cylinderArea: function (r, h) {
        return (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2));
    },

    coneArea: function (r, h) {
        const base = Math.PI * Math.pow(r, 2);
        const wrap = Math.PI * r * Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2));
        return base + wrap;
    },

};