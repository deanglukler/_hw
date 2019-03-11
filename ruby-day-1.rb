# sup ruby!
# use irb and load your own file
irb -r ./ip_grabber

### debugging
#pry  --  https://github.com/pry/pry
require pry
binding.pry
# use
> exit
# to quit

### printing
unknown = ""
puts unknown.inspect

# Since the combination of puts and inspect are used so often, 
# there's a shortcut that does both in one go, called p
unknown = ""
p unknown # equivalent to `puts unknown.inspect`



# list all local variables
ls
