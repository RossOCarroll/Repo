require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')

def prompt(message)
  puts("=> #{message}")
end

def integer?(input)
  input.to_i.to_s == input
end

def float?(input)
  input.to_f.to_s == input
end

def number?(input)
  integer?(input) || float?(input)
end

def operation_to_message(op)
  word = case op
          when '1'
          'Adding'
          when '2'
          'Subtracting'
          when '3'
          'Multiplying'
          when '4'
          'Dividing'
          end
  word
end

prompt(MESSAGES['welcome'])

name = ''
loop do
  name = gets.chomp

  if name.empty?
    prompt("Make sure you enter a valid name.")
  else
    break
  end
end

prompt("Hello, #{name}")

loop do
  number1 = ''
  loop do
    prompt(MESSAGES['enter_num1'])
    number1 = gets.chomp

    if number?(number1)
      break
    else
      prompt(MESSAGES['valid_num'])
    end
  end

  number2 = ''
  loop do
    prompt(MESSAGES['enter_num2'])
    number2 = gets.chomp

    if number?(number2)
      break
    else
      prompt(MESSAGES['valid_num'])
    end
  end

  operator_prompt = <<-MSG
    What operation would you like to perform?
    1) add
    2) subtract
    3) multiply
    4) divide
  MSG

  prompt(operator_prompt)

  operator = ''
  loop do
    operator = gets.chomp
    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt(MESSAGES['must_choose'])
    end
  end

  prompt("#{operation_to_message(operator)} the two numbers")

  result = case operator
           when '1'
             number1.to_f + number2.to_f
           when '2'
             number1.to_f - number2.to_f
           when '3'
             number1.to_f * number2.to_f
           when '4'
             number1.to_f / number2.to_f

           end

  prompt("Your result is #{result}")

  prompt(MESSAGES['preform_again'])
  answer = gets.chomp
  break unless answer.downcase.start_with?('y')
end

prompt("Thank you #{name} for using calculator!")