 def print_in_box(string)
  banner_line = ''
  empty_line = ''
  string.size.times { empty_line << ' '}
  string.size.times { banner_line << '-'}
  string.prepend('| ')
  string << ' |'

  puts top_line = '+-' + banner_line + '-+'
  puts '| ' + empty_line + ' |'
  puts string
  puts '| ' + empty_line + ' |'

  puts top_line
 end
 
 
 
 
 puts print_in_box('To boldly go where no one has gone before.')