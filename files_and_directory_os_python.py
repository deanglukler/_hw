# from this article: https://automatetheboringstuff.com/chapter8/


import os

# Paths

os.path.join('usr', 'bin', 'spam') returned 'usr\\bin\\spam'

os.path.abspath(path) will return a string of the absolute path of the argument. This is an easy way to convert a relative path into an absolute one.

os.path.dirname(path) will return a string of everything that comes before the last slash in the path argument

os.path.basename(path) will return a string of everything that comes after the last slash in the path argument

os.path.split() to get a tuple value with these two strings
>>> calcFilePath = 'C:\\Windows\\System32\\calc.exe'
>>> os.path.split(calcFilePath)
('C:\\Windows\\System32', 'calc.exe')

On OS X and Linux systems, there will be a blank string at the start of the returned list:

>>> '/usr/bin'.split(os.path.sep)
['', 'usr', 'bin']



# Current working directory

get the current working directory as a string value with the os.getcwd()

change it with os.chdir()





# Creating New Folders with os.makedirs()

os.makedirs('C:\\delicious\\walnut\\waffles')

os.makedirs() will create any necessary intermediate folders in order to ensure that the full path exists

Calling os.path.isabs(path) will return True if the argument is an absolute path and False if it is a relative path

Calling os.path.relpath(path, start) will return a string of a relative path from the start path to path. 
If start is not provided, the current working directory is used as the start path.






# deleting files
os.remove() and os.unlink() functions are semantically identical

import os

file_path = '/tmp/file.txt'
os.unlink(file_path)




# deleting folders (that are not empty).  See os.rmdir(dir_path) to remove empty directories
With the shutil.rmtree() function you can delete a given directory including its content

import shutil

dir_path = '/tmp/img'

try:
    shutil.rmtree(dir_path)
except OSError as e:
    print("Error: %s : %s" % (dir_path, e.strerror))











# Folder contents

os.listdir(path) will return a list of filename strings for each file in the path argument

>>> totalSize = 0
>>> for filename in os.listdir('C:\\Windows\\System32'):
      totalSize = totalSize + os.path.getsize(os.path.join('C:\\Windows\\System32', filename))

>>> print(totalSize)
1117846456

# notice this for loopping the file name
os.path.join('C:\\Windows\\System32', filename)








# path validity

os.path.exists(path) will return True if the file or folder referred to in the argument exists

os.path.isfile(path) will return True if the path argument exists and is a file

os.path.isdir(path) will return True if the path argument exists and is a folder









# reading and writing files

# open
The call to open() returns a File object

>>> helloFile = open('/Users/your_home_folder/hello.txt')

Read mode is the default mode for files you open in Python
open('/Users/asweigart/ hello.txt', 'r') and open('/Users/asweigart/hello.txt') do the same thing

# reading

read the entire contents of a file as a string value..
>>> helloContent = helloFile.read()
>>> helloContent
'Hello world!'


the read() method returns the string that is stored in the file.

list of stringss..
>>> sonnetFile = open('sonnet29.txt')
>>> sonnetFile.readlines()

# writing

Write mode will overwrite the existing file and start from scratch, Pass 'w' as the second argument to open()

Append mode, on the other hand, will append text to the end of the existing file, Pass 'a' as the second argument to open()

If the filename passed to open() does not exist, both write and append mode will create a new, blank file.

all the close() method before opening the file again.


>>> baconFile = open('bacon.txt', 'w')
>>> baconFile.write('Hello world!\n')
13
>>> baconFile.close()
>>> baconFile = open('bacon.txt', 'a')
>>> baconFile.write('Bacon is not a vegetable.')
25
>>> baconFile.close()
>>> baconFile = open('bacon.txt')
>>> content = baconFile.read()
>>> baconFile.close()
>>> print(content)
Hello world!
Bacon is not a vegetable.













# shelf module

save variables to a file as a binary..

>>> import shelve
>>> shelfFile = shelve.open('mydata')
>>> cats = ['Zophie', 'Pooka', 'Simon']
>>> shelfFile['cats'] = cats
>>> shelfFile.close()

shelve.open() and pass it a filename
You can make changes to the shelf value as if it were a dictionary
When you’re done, call close()


>>> shelfFile = shelve.open('mydata')
>>> list(shelfFile.keys())
['cats']
>>> list(shelfFile.values())
[['Zophie', 'Pooka', 'Simon']]
>>> shelfFile.close()







# Saving Variables with the pprint.pformat() Function

>>> import pprint
>>> cats = [{'name': 'Zophie', 'desc': 'chubby'}, {'name': 'Pooka', 'desc': 'fluffy'}]
>>> pprint.pformat(cats)
"[{'desc': 'chubby', 'name': 'Zophie'}, {'desc': 'fluffy', 'name': 'Pooka'}]"
>>> fileObj = open('myCats.py', 'w')
>>> fileObj.write('cats = ' + pprint.pformat(cats) + '\n')
83
>>> fileObj.close()


>>> import myCats
>>> myCats.cats
[{'name': 'Zophie', 'desc': 'chubby'}, {'name': 'Pooka', 'desc': 'fluffy'}]
>>> myCats.cats[0]
{'name': 'Zophie', 'desc': 'chubby'}
>>> myCats.cats[0]['name']
'Zophie'











# Copy files



You can use one of the copy functions from the shutil package:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Function              preserves     supports          accepts     copies other
                      permissions   directory dest.   file obj    metadata  
――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――
shutil.copy              ✔             ✔                 ☐           ☐
shutil.copy2             ✔             ✔                 ☐           ✔
shutil.copyfile          ☐             ☐                 ☐           ☐
shutil.copyfileobj       ☐             ☐                 ✔           ☐
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Example:

import shutil
shutil.copy('/etc/hostname', '/var/tmp/testhostname')
















