### example pattern matching struct..

  def pick_color(image) do
    %Identicon.Image{hex: hex_list} = image
    [r, g, b | _tail] = hex_list

    %Identicon.Image{image | color: {r, g, b}}
  end

  # refactor 1..
  def pick_color(image) do
    %Identicon.Image{hex: [r, g, b | _tail]} = image

    %Identicon.Image{image | color: {r, g, b}}
  end

  # refactor 2..
  def pick_color(%Identicon.Image{hex: [r, g, b | _tail]} = image) do
    %Identicon.Image{image | color: {r, g, b}}
  end

  # assume we have another function parameter.. ex size..
  def pick_color(%Identicon.Image{hex: [r, g, b | _tail]} = image, { width, height } = size) do
    %Identicon.Image{image | color: {r, g, b}}
  end




### struct

def build_grid(%Identicon.Image{hex: hex} = image) do
  hex
  |> Enum.chunk(3)
end





### list
def mirror_row(row) do
  # [43, 211, 35]
  [one, two | _tail] = row

  # [43, 211, 35, 211, 43]
  row ++ [two, one]
  # note, to test in console.. set this or you get weird chars
  #  IEx.configure(inspect: [charlists: :as_lists])
end




















