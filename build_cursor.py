"""Generate dumbbell cursor PNGs for Mega Gym site.

Renders at 4x supersampled then downscales with LANCZOS for crisp edges.
Outputs cursor.png (32x32) and cursor@2x.png (64x64).
"""
from PIL import Image, ImageDraw
import os

BLACK = (10, 10, 10, 255)
YELLOW = (245, 197, 24, 255)
SCALE = 8  # supersample factor

def draw_dumbbell(size):
    s = size * SCALE
    img = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)

    # Draw in 32x32 logical units, scaled up
    u = s / 32

    def rect(x, y, w, h, fill, radius=0):
        x0, y0 = x * u, y * u
        x1, y1 = (x + w) * u, (y + h) * u
        if radius > 0:
            d.rounded_rectangle([x0, y0, x1, y1], radius=radius * u, fill=fill)
        else:
            d.rectangle([x0, y0, x1, y1], fill=fill)

    # Outer plates (small)
    rect(3, 12, 4, 8, BLACK, radius=1)
    # Inner plates (large)
    rect(7, 10, 3, 12, BLACK, radius=1)
    # Bar (yellow)
    rect(10, 14.5, 12, 3, YELLOW)
    # Inner plates right
    rect(22, 10, 3, 12, BLACK, radius=1)
    # Outer plates right
    rect(25, 12, 4, 8, BLACK, radius=1)

    # Rotate -30 degrees around center
    img = img.rotate(30, resample=Image.BICUBIC, expand=False)

    # Downscale with LANCZOS for sharp antialiasing
    img = img.resize((size, size), Image.LANCZOS)
    return img

here = os.path.dirname(os.path.abspath(__file__))

img32 = draw_dumbbell(32)
img64 = draw_dumbbell(64)

img32.save(os.path.join(here, "cursor.png"), optimize=True)
img64.save(os.path.join(here, "cursor@2x.png"), optimize=True)

print("Wrote cursor.png (32x32) and cursor@2x.png (64x64)")
