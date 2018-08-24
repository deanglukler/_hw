# Anonymous function
increase = fn(num) -> num + 1 end

# shorthand
increase = &(&1 + 1)
# & can be thought of as a replacement of fn() ->
# &1 refers to the first (and only) parameter

defmodule Math do
  def sum(a, b) do # can be executed in any namespace
    do_sum(a, b)
  end

  defp do_sum(a, b) do # can only be executed in Math namespace
    a + b
  end
end