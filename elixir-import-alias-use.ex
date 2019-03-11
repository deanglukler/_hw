# Ensure the module is compiled and available (usually for macros)
require Foo

# Import functions from Foo so they can be called without the `Foo.` prefix
import Foo

# Invokes the custom code defined in Foo as an extension point
use Foo





Require
Elixir provides macros as a mechanism for meta-programming (writing code that generates code).

Macros are chunks of code that are executed and expanded at compilation time. This means, in order to use a macro, we need to guarantee its module and implementation are available during compilation. This is done with the require directive.

In general a module does not need to be required before usage, except if we want to use the macros available in that module.







Import
We use import whenever we want to easily access functions or macros from other modules without using the fully-qualified name. For instance, if we want to use the duplicate/2 function from the List module several times, we can import it:

iex> import List, only: [duplicate: 2]
List
iex> duplicate :ok, 3
[:ok, :ok, :ok]
In this case, we are importing only the function duplicate (with arity 2) from List.

Note that importing a module automatically requires it.









Use
Although not a directive, use is a macro tightly related to require that allows you to use a module in the current context. The use macro is frequently used by developers to bring external functionality into the current lexical scope, often modules.

Behind the scenes, use requires the given module and then calls the __using__/1 callback on it allowing the module to inject some code into the current context. Generally speaking, the following module:

defmodule Example do
  use Feature, option: :value
end
is compiled into

defmodule Example do
  require Feature
  Feature.__using__(option: :value)
end













