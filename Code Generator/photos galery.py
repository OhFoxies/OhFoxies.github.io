import os
import numpy
folder = input("images path on website: ")
path = input("path to images: ")
photos = os.listdir(path)
spliter = numpy.array_split(photos, 3)
splited_list = []
for generation in range(3):
    splited_list.clear()
    splited_list.append(spliter[generation])
    with open(f'column{generation+1}.txt', 'w') as file:
        for i in splited_list:
            for j in i:
                file.write('<div class="photo-container">\n')
                file.write('    <picture class="photo-in-gallery">\n')
                file.write(f'        <img class="photo-gallery" loading="lazy" src="images/{folder}/{j}" alt="{j}" onclick="preview(this.src)"/>\n')
                file.write('    </picture>\n')
                file.write('</div>\n')
