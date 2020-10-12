export default {

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

};