const F = require('./calc.js');
const a = (x, y, tol = 1e-3) => {
  if (Math.abs(x - y) / (Math.abs(y) || 1) > tol) throw Error(x + ' vs ' + y);
};

// Sabine: GTU-style room from Physics guide pattern (own numbers)
// V=2000, surfaces 500@0.02, 300@0.3, 100@0.9 -> A=190, T=1.6947...
const A = F.sabine.absorption([[500, 0.02], [300, 0.3], [100, 0.9]]);
a(A, 190, 1e-9);
a(F.sabine.T(2000, A), 1.694736842, 1e-5);
// GTU data shape from content: room 1500 m3, walls 240, floor+ceil 125, coeffs 0.025,0.85,0.09
// A = 240*0.025 + 125*0.85 + 125*0.09 = 6 + 106.25 + 11.25 = 123.5
const A2 = F.sabine.absorption([[240, 0.025], [125, 0.85], [125, 0.09]]);
a(A2, 123.5, 1e-9);
a(F.sabine.T(1500, A2), 1.9554656, 1e-5);

// Green
a(F.green.rectNegY_X(2, 3), 12);
a(F.green.doubleIntegral(2, 6), 12);
a(F.green.unitCircleNegY_X(), 2 * Math.PI);

// Critical field Bc = Bc0 (1 - (T/Tc)^2)
a(F.critical.Bc(0.0803, 0, 7.2), 0.0803); // Pb-ish demo numbers (own)
a(F.critical.Bc(0.0803, 7.2, 7.2), 0);
a(F.critical.Bc(0.0803, 3.6, 7.2), 0.0803 * 0.75, 1e-6);
// Isotope: Hg 199.5 -> 203.4, Tc 4.185 (GTU question data from Physics guide)
a(F.critical.TcIsotope(4.185, 199.5, 203.4), 4.185 * Math.sqrt(199.5 / 203.4), 1e-9);

// Arrays
a(F.arrays.sum([1, 2, 3, 4, 5]), 15);
a(F.arrays.max([3, 9, 2]), 9);
JSON.stringify(F.arrays.reverse([1, 2, 3])) === '[3,2,1]' || (() => { throw Error('rev'); })();

console.log('All checks passed');
