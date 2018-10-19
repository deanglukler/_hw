def ruby_or_python(candidate)
  candidate[:languages].any? {|lang| ['Ruby', 'Python'].include?(lang)}
end