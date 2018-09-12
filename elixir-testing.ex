### see directory /test/

### run tests
mix test





### Assertion Tests
# ...

defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

  test "create_deck makes 12 cards" do
    deck_length = length(Cards.create_deck)
    assert deck_length == 12
  end

  test "shuffle better randomize those cards!" do
    deck = Cards.create_deck
    refute deck == Cards.shuffle(deck)
  end
end





### Doc testing
# mix runs tests based on documentation that you wrote

@doc """
  Returns a list with some cards in it
  `use fancy backticks for shit`

## Examples

    iex> deck = Cards.create_deck
    iex> {hand, deck} = Cards.deal(deck, 1)
    iex> hand
    ["Ace of Hearts"]

"""

# another example, remember short targetted doc tests
@doc """
  Determines if a deck contains a card

## Examples

    iex> deck = Cards.create_deck
    iex> Cards.contains?(deck, "Ace of Spades")
    true

"""





















