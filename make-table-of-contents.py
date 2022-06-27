# make-table-of-contents.py: create links to all of the pieces and examples and techniques

import os, glob

directories = [name for name in os.listdir('.') if os.path.isdir(name) and name != '.git']

links = ''
for directory in directories:
    links += f"<div class='category'> <div class='category-name'>{directory}</div>\n"
    for name in glob.glob(directory + '/**/*.html', recursive=True):
        links += f"<li> <a href= '{name}'>{name}</a></li>\n"
    links += "</div>\n"
print("\n\n", links)


contents = open('template-table-contents.html').read()
contents = contents.replace('[LINKS]', links)

table = open('table-of-contents.html', 'w')
table.write(contents)
table.close()