export default {

    isRightTriangle: function (a, b, c) {
        return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
    },

    isSquare: function (l, w) {
        return l === w;
    },

    isEquilateral: function (a, b, c) {
        return a === b && b === c && c === a;
    },

    isScalene: function (a, b, c) {
        return !(a === b && b === c && c === a);
    }
}