# write to end of file
with open('file.txt', 'a') as f:
    f.write('blah')
    f.writelines(lines)


# write to only specific line in file
import fileinput
import sys

def replaceAll(file,searchExp,replaceExp):
    for line in fileinput.input(file, inplace=1):
        if searchExp in line:
            # string replace
            line = line.replace(searchExp,replaceExp)
        # sys.stdout instead of print to avoid line breaks
        sys.stdout.write(line)