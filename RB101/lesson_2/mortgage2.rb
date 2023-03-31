def prompt(message)
  puts "=> #{message}"
end

loop do
  loan = ''
  loop do 
    prompt("Please enter a loan amount:")
    loan = gets.chomp
    if loan.empty? || loan.to_f < 0
      prompt("Must enter a positive number")
    else
      break
    end
  end

  p loan

  duration = ''
  loop do
    prompt("Please enter loan duration (years):")
    duration = gets.chomp
    if duration.empty? || duration.to_f < 0
      prompt("Must enter a positive number")
    else
      break
    end
  end

  p duration

  rate = ''
  loop do 
    prompt("Please enter APR:")
    rate = gets.chomp
    if rate.empty? || rate.to_f < 0
      prompt("must enter a positive number")
    else
      break
    end
  end

  p rate

  p x = rate.to_f / 100

  p i = x.to_f / 12

  p d = duration.to_f * 12

  p monthly_payment = loan * (i / (1 - (1 + i)**(-d)))

  #prompt("You're monthly payment is #{monthly_payment}")
  prompt("Would you like to mak another calculation?")
  answer = gets.chomp.downcase
    break unless answer == 'y'
end


