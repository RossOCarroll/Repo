stoplight = ['green', 'yellow', 'red'].sample

case stoplight
when 'green'
  puts "GO!"
when 'yellow'
  puts "Slow Down!"
else 'red'
  puts "Stop!"
end