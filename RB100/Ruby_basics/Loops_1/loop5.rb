say_hello = true
count = 0

while say_hello
  puts 'hello' 
  count += 1
  say_hello = false if count == 5
end
