export default {

    quadFormula: function (a, b, c) {
        const num1 = (-b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        const num2 = (-b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        return [num1, num2];
    },

    discriminant: function (a, b, c) {
        const disc = Math.pow(b, 2) - (4 * a * c);
        if (disc > 0) {
            return "There are 2 real roots.";
        } else if (disc === 0) {
            return "There is a repeated root.";
        } else {
            return "There are 2 complex roots.";
        }
    },

    heronFormula: function (a, b, c) {
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    },

};