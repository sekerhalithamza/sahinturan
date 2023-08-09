import os
from PIL import Image

arr = []

for f in os.walk("."):
    for i, file in enumerate(f[2]):
        if file.endswith(".webp"):
            img = Image.open(file)
            arr.append((file, img.width / img.height))

divs = ""
for file, aspect_ratio in arr:
    divs += f'<img src="assets/gallery/{file}" alt="Gallery Image" data-aspect-ratio="{aspect_ratio:.2f}" class="section-gallery__content-item" />\n'

data = f'<div class="section-gallery__content">\n{divs}</div>'

print(data)

"""
for f in os.walk("."):
    for i, file in enumerate(f[2]):
        if file.endswith(".webp"):
            os.rename(f"{file}", f"{i}.webp")
"""
