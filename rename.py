import os

os.chdir(os.path.join(os.getcwd(),u'public/images'))

for file in os.listdir():
    if "1" in file:
        print(file)
        os.rename(file, file[0:-14] + '.jpg')

for file in os.listdir():
    print(file)