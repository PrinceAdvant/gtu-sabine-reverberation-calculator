# GTU Physics 3110011 Sabine reverberation calculator

Reverberation time (Sabine) numericals came in 8 of 9 official GTU Physics 3110011 papers in GTU Hero's count (Summer 2022 to Summer 2026), usually for 3 or 4 marks. Formula T = 0.161 V / A. Ye page absorption area se T nikaalta hai.

Live page: https://princeadvant.github.io/gtu-sabine-reverberation-calculator/

## Formulas

- T = 0.161 V / A
- A = Σ α_i S_i (sabine m²)
- Example GTU-shaped data: V=1500 m³, walls 240 m² at 0.025, floor and ceiling 125 m² at 0.85 and 0.09

## Test

`node test.js` checks the formulas against hand-worked values and prints `All checks passed`.

## Tips

- A is total absorption, not area alone. Multiply each surface by its coefficient.
- T uses 0.161 when V and A are in SI (m³ and m²).
- The 1500 m³ room numbers match the shape of a sum that appeared in 3110011 S2024 and S2026 (per GTU Hero's Physics guide).

Repeat counts and old papers: [GTU Physics Paper Sem 1 and 2: PYQs on Repeat Mode](https://gtuhero.com/blogs/gtu-physics-paper-sem-1-2-pyq) (GTU Hero is my project).
