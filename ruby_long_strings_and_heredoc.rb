Long Strings and Newlines
There are times you may want to insert a newline character, or carriage return in your string. You can use the \n or \r escape characters to insert a newline in the code:

output = "This is\na string\nwith newlines"
puts output
This program would produce this output:

Output
This is
a string
with newlines
This technically works to get our output on multiple lines. However, writing a very long string on a single line will quickly become very hard to read and work with. There are a few solutions.

First, you can use the concatenation operator to split the string onto multiple lines:

output = "This is a\n" +
         "longer string\n" +
         "with newlines."
puts output
This just concatenates three strings together, similar to what you’ve already done.

You can also just put the line breaks right in the string:

output = "This is a
         longer string
         with newlines"
puts output
You can also use any of the alternate string syntaxes to create multiline strings:

output = %{This is a
           longer string
           with newlines}
puts output
In both of these examples, notice that we don’t need the newline ( \n) characters. This approach preserves whitespace, including indentation and newlines.

As a result, the output will contain the line breaks, as well as all the leading indentation, like this:

Output
This is a
           longer string
           with newlines
To prevent that, remove the extra whitespace from your code:

output = %{This is a
longer string
with newlines
}
You can also create multiline strings using a heredoc, or “here document”, a term used for multiline string literals in programs. Here’s how you’d write that code:

output = <<-END
This is a
longer string
with newlines
END
The <<-END and END markers denote the start and end of the heredoc.

Heredocs in Ruby also preserve whitespace characters, which means if you indent the code in the heredoc, the leading indentation is preserved too. So this code:

output = <<-END
  This is a
  longer string
  with newlines
END
would print out with two spaces of indentation.

Ruby 2.3 and higher provide the “squiggly heredoc” syntax which automatically removes this leading whitespace. Replace the hyphen in the heredoc definition with a tilde, so <<- becomes <<~, like this:

output = <<~END
  This is a
  longer string
  with newlines
  and the code is indented
  but the output is not.
END
This produces the following output:

Output
This is a
longer string
with newlines
and the code is indented
but the output is not.
This lets you use heredocs and keep your code nicely indented.

Heredocs in Ruby also supports string interpolation.

As you can see, there are a lot of ways to handle newlines and multiline strings in Ruby. You’ll encounter all of these methods as you work with existing Ruby code, as each project tends to have its own style. In your own code, choose the style that’s right for you and be consistent.