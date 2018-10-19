
import
# take all funcs out of this module and
# give them to this other module

# ex
defmodule TopicController do
  import Math

  # .  .  .
end

# now this should be available..
TopicController.add(2, 4)



#  #  #

alias
# give me a shortcut to this other module

# ex
defmodule TopicController do
  alias Math

  def random_fn(a1, a2) do
    add(a2, a1)
  end
end

# this wont work
TopicController.add(2, 5) # ! nooooooooooo don't


#  #  #


use
# I want to do some really fancy setup