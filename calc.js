const PI = Math.PI;
const F = {
  sabine: {
    absorption: (surfaces) => surfaces.reduce((s, [A, a]) => s + A * a, 0),
    T: (V, A) => 0.161 * V / A,
  },
  green: {
    // When (dQ/dx - dP/dy) is constant: integral = const * area
    doubleIntegral: (constVal, area) => constVal * area,
    // P=-y, Q=x around rectangle [0,a]x[0,b] anticlockwise = 2ab
    rectNegY_X: (a, b) => 2 * a * b,
    unitCircleNegY_X: () => 2 * PI,
  },
  critical: {
    Bc: (Bc0, T, Tc) => Bc0 * (1 - (T / Tc) * (T / Tc)),
    // isotope effect: Tc * M^alpha = const, alpha ~ 0.5 => Tc2 = Tc1 * sqrt(M1/M2)
    TcIsotope: (Tc1, M1, M2) => Tc1 * Math.sqrt(M1 / M2),
  },
  // simple array helpers used by PPS pages for demo sums
  arrays: {
    sum: (arr) => arr.reduce((a, b) => a + b, 0),
    max: (arr) => Math.max(...arr),
    reverse: (arr) => [...arr].reverse(),
  },
};
if (typeof module !== 'undefined') module.exports = F;
