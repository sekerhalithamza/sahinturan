import os


arr = [
    1,
    2,
    4,
    5,
    7,
    8,
    9,
    10,
    12,
    15,
    17,
    18,
    20,
    21,
    24,
    32,
    34,
    37,
    36,
    40,
    41,
    45,
    48,
    49,
    51,
    55,
    65,
    71,
]

for f in os.walk("."):
    for i, file in enumerate(f[2]):
        if file.endswith(".webp"):
            found = False
            for v in arr:
                if file.startswith(str(v)):
                    found = True
            if not found:
                print("removing file", file)
                # os.remove(file)

"""
from PIL import Image

arr = []

for f in os.walk("."):
    for i, file in enumerate(f[2]):
        if file.endswith(".webp"):
            img = Image.open(file)
            arr.append((file, img.width / img.height))

divs = ""
th = len(arr) // 3
for i, file, aspect_ratio in arr:
    divs += f'<img loading="lazy" src="assets/gallery/{file}" alt="Gallery Image" data-aspect-ratio="{aspect_ratio:.2f}" class="section-gallery__content-item" />\n'

data = f'<div class="section-gallery__content">\n{divs}</div>'

print(data)
"""
"""
for f in os.walk("."):
    for i, file in enumerate(f[2]):
        if file.endswith(".webp"):
            os.rename(f"{file}", f"{i}.webp")
"""
