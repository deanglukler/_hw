with open('test.txt', 'r') as inf, open('test1.txt', 'w') as outf:
    for line in inf:
        line = line.strip()
        if line:
            try:
                outf.write(int(line, 16))
                outf.write('\n')
            except ValueError:
                print("Could not parse '{0}'".format(line))

