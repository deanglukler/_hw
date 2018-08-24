# Anonomous
sum = fn (a, b) -> a + b end

# unlike calling a named function we have a '.' between the function name and its arguments
sum.(1, 3)

# ---

# Capture Operator
# parameters are available to us as &1, &2, &3
sum = &(&1 + &2)
IO.puts(sum.(1, 2))

# ---

# pattern matching functions
handle_result = fn
   {var1} -> IO.puts("#{var1} found in a tuple!")
   {var_2, var_3} -> IO.puts("#{var_2} and #{var_3} found!")
end
handle_result.({"Hey people"})
handle_result.({"Hello", "World"})

# output
# Hey people found in a tuple!
# Hello and World found!

# ---

# Named Functions
# Named functions are always defined in a module.
# To call named functions, we need to reference them using their module name.
def function_name(argument_1, argument_2) do
  # got code?
end

# sum
defmodule Math do
   def sum(a, b) do
      a + b
   end
end

# and for one lineers
defmodule Math do
   def sum(a, b), do: a + b
end
IO.puts(Math.sum(5, 6))

# ---

# default arguments, we use the argument \\ value
# To define a private function, use defp
defmodule Greeter do
   def hello(name, country \\ "en") do
      phrase(country) <> name
   end

   defp phrase("en"), do: "Hello, "
   defp phrase("es"), do: "Hola, "
end

Greeter.hello("Ayush", "en")
Greeter.hello("Ayush")
Greeter.hello("Ayush", "es")
# Hello, Ayush
# Hello, Ayush
# Hola, Ayush


























