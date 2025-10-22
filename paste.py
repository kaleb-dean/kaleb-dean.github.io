import pyperclip

content = pyperclip.paste()
if len(content):
    print(content)
else:
    content = input('Paste here: ')
pyperclip.copy(content)