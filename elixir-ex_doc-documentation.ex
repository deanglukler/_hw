defmodule Cards do
  @moduledoc """
    provides functions to create and manage a deck of "special" cards
  """
  @doc """
    Returns a list with some cards in it
    `use fancy backticks for shit`

  ## Examples

      iex> deck = Cards.create_deck
      iex> {hand, deck} = Cards.deal(deck, 1)
      iex> hand
      ["Ace of Spades"]

  """
  def create_deck do
    values = ["Ace", "Two", "Three"]
    suits = ["Hearts", "Diamonds", "Clubs", "Spades"]

    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end
  end
end



# create html docs
mix docs