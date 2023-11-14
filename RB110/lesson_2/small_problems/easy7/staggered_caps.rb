# Write a method that takes a String as an argument, and returns a new String that contains 
# the original value using a staggered capitalization scheme in which every other character 
# is capitalized, and the remaining characters are lowercase. Characters that are not 
# letters should not be changed, but count as characters when switching between upper and 
# lowercase.


# Input:
#   -String

# Output:
#   -New string with alternating capitalization

# Rules:
#   Explicit: 
#     -Characters that are not letter should remain up changes but count as characters
# when switching between upper and lowere case
#   Implicit:
#     -numbers as well count as characters when switching
      #-Start with uppercase

# Ouestions:


# Test cases / Exsamples:

# staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# staggered_case('ALL_CAPS') == 'AlL_CaPs'
# staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

# Data structure:
#   -String
#   Assisting
#   -Array

# Algorithm:
#   -Set a result and assign to the splited input string
#   -Set a counter1 to 0
#   -Set a counter2 to 1
#   -loop through array
#     -Capitalize element at index counter1
#     -Capitalize element at counter2
#     -Incement counter1 by 2
#     -Increment counter2 by 2
#     -Break when counter1 is equal to array size
#   -join array and return


def staggered_case_dont_skip(string)
  result = string.split(//)
  counter1 = 0
  counter2 = 1

  loop do
    result[counter1].upcase! if result[counter1]
    result[counter2].downcase! if result[counter2]

    counter1 += 2
    counter2 += 2

    break if counter1 >= result.size 
  end

  result.join
end



# p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
# p staggered_case('ALL_CAPS') == 'AlL_CaPs'
# p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'

#Further Exploration:

# def staggered_case2(string, starting_case)
#   result = ''
#   need_upper = true if starting_case.downcase == "upper"
#   string.chars.each do |char|
#     if need_upper
#       result += char.upcase
#     else
#       result += char.downcase
#     end
#     need_upper = !need_upper
#   end
#   result
# end


# p staggered_case2('I Love Launch School!', "downer")# == 'I LoVe lAuNcH ScHoOl!'
# p staggered_case2('ALL_CAPS', 'upper') #== 'AlL_CaPs'
# p staggered_case2('ignore 77 the 444 numbers', 'downer') #== 'IgNoRe 77 ThE 444 NuMbErS'

def staggered_case(string)
  result = string.split(//)
  counter = 0
 
  result.each_with_index do |char , index|
    next if char =~ /[^A-Za-z]/

    result[index] = counter.even? ? char.upcase : char.downcase
    counter += 1

  end
  
  result.join
end

def staggered_case_choice(string, action)
  if action == 'skip'
    staggered_case(string)
  else
    staggered_case_dont_skip(string)
  end

end

# p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
# p staggered_case('ALL CAPS') == 'AlL cApS'
# p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'




