def age
  rand(20..200)
end

user_name = ""

def name_verify(input)
  if input.empty?
     user_name = "Teddy"
  else
    user_name = input
  end
end

puts "Whats your name ?"
user_name = gets.chomp.to_s




puts "#{name_verify(user_name)} is #{age} years old!"