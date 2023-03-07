PASSWORD = "SecreT"
USER_NAME = "Ross"

loop do
  puts "please enter your user name:"
  get_user_name = gets.chomp
  puts "Please enter your password:"
  get_password = gets.chomp
  break if get_user_name == USER_NAME && get_password == PASSWORD   
  puts "invalid password/user name"
end

puts "welcome"