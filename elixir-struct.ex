# structs
# just like maps
# can be assigned default values
# also enforces that the only properties that can exist are those predefined

# ex.. /lib/image.ex
defmodule Identicon.Image do
  defstruct hex: nil, color: nil
end



### usage in app.. should be accessible anywhere
# %Identicon.Image{}
# ex..
def hash_string(str) do

  # . . .

  %Identicon.Image{hex: hex}

end



### accessing data in struct
# this won't work!!
image = %Identicon.Image{hex: hex}
some_value = image[0]

# instead..
%Identicon.Image{hex: hex_list} = image



### adding data..
# create new struct with color property
%Identicon.Image{image | color: {r, g, b}}

