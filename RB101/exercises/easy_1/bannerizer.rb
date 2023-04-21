def print_in_box(input)
  string_length = input.length + 2
  empty_line = "|#{" " * string_length}|"
  print "+" 
  string_length.times {print "-"}
  print "+"
  puts "\n"
  puts empty_line
  puts "| " + input + " |"
  puts empty_line
  print "+" 
  string_length.times {print "-"}
  print "+"
end

print_in_box("To boldly go where no man has gone before")
