i = 0
numbers = []

while i < 6:
    print "Let's add the number %d to that " % i
    numbers.append(i)

    i = i + 1
    print "numbers now, ", numbers
    print "this is the end of the loop\nat the bottom is %d" % i

print "The numbers: "

for num in numbers:
    print num
