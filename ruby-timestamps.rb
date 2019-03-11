require 'date'

p DateTime.now.strftime('%s') # "1384526946" (seconds)
p DateTime.now.strftime('%Q') # "1384526946523" (milliseconds)