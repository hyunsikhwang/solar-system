# Texture credits

Planetary textures by Solar System Scope / INOVE, based on NASA imagery and elevation data.

Source: https://www.solarsystemscope.com/textures/

License: Creative Commons Attribution 4.0 International (CC BY 4.0): https://creativecommons.org/licenses/by/4.0/

Modifications: Earth day map reduced from 8192×4096 to 4096×2048 with Lanczos resampling, JPEG quality 95. Earth specular and tangent-space normal TIFF maps converted to browser-compatible JPEG (quality 97); lossless PNG copies also available. No fictional geography was generated.

Source notes: Solar System Scope adjusts color saturation and fills unmapped gaps on some planets. Earth maps are based on NASA Blue Marble and merged geodata. These are visual textures, not current satellite conditions.

| Local file | Dimensions | Source download |
|---|---|---|
| earth-day.jpg | 4096×2048 | https://www.solarsystemscope.com/textures/download/8k_earth_daymap.jpg |
| earth-night.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_earth_nightmap.jpg |
| earth-clouds.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_earth_clouds.jpg |
| earth-specular.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_earth_specular_map.tif |
| earth-normal.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_earth_normal_map.tif |
| sun.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_sun.jpg |
| mercury.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_mercury.jpg |
| venus.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_venus_atmosphere.jpg |
| mars.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_mars.jpg |
| jupiter.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_jupiter.jpg |
| saturn.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_saturn.jpg |
| uranus.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_uranus.jpg |
| neptune.jpg | 2048×1024 | https://www.solarsystemscope.com/textures/download/2k_neptune.jpg |
| saturn-ring.png | 2048×125 | https://www.solarsystemscope.com/textures/download/2k_saturn_ring_alpha.png |

Rendering notes: cloud map is white on black and can be used directly as alphaMap. Earth specular map is white ocean / black land. The normal map is tangent-space RGB; use linear sampling and a subtle normalScale. Saturn ring texture is RGBA, 2048×125, with horizontal radial bands; map U to ring radius and hold V near 0.5.

Validation: all final files fully decoded with Pillow; contact sheet visually inspected. Earth day at 4k is the final selected file.

Moon texture by Solar System Scope, licensed under CC BY 4.0. Source: https://www.solarsystemscope.com/textures/ ; download: https://www.solarsystemscope.com/textures/download/2k_moon.jpg (2048 × 1024). No modifications.
