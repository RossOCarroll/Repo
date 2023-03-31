def prompt(message)
  puts "=> #{message}"
end

def integer?(input)
  input.to_i.to_s == input
end

def float?(input)
  input.to_f.to_s == input
end

def mp(input)
  input = loan_amount * (apr / (1 - (1 + apr)**(-loan_duration)))
end


prompt("Please enter your name:")

name = ''
  loop do
    name = gets.chomp
    if name.empty?
      prompt("please enter a valid name")
    else
      break
    end
  end


prompt("Welcome #{name} to the mortgage calculator")

loan_amount = ''

loop do 
  prompt("Please enter the loan amount:")
  loan_amount = gets.chomp
    if integer?(loan_amount)
      break
    else
      puts "please enter a valid number"
    end
  end

apr = ''

loop do
  prompt("Please enter the annual percentage rate (APR):")
  apr = gets.chomp/100
    if integer?(apr)
      break
    else
      puts "Error invalid"
    end
  end

loan_duration = ''

loop do
  prompt("Please enter loan duration (Months):")
  loan_duration = gets.chomp
  if float?(loan_duration)
    break
  else
    puts "Please enter a valid number"
  end
end



monthly_payment = loan_amount.to_i * (apr.to_i / (1 - (1 + apr.to_f)**(-loan_duration.to_i)))

puts monthly_payment



