target = open(l_s_path, 'w')
target.truncate()
target.write(temp)
target.close()

# or using the os function which creates a temp file or something..
with open(l_s_path, 'w') as target:
    target.truncate()
    target.write(temp)