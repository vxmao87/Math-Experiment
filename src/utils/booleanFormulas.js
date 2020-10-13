export default {

    isRightTriangle: function (a, b, c) {
        return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
    },

    isSquare: function (l, w) {
        return l === w;
    }
}