import os

for f in os.walk("."):
    for i, file in enumerate(f[2]):
        if file.endswith(".webp"):
            os.rename(f"{file}", f"{i}.webp")
