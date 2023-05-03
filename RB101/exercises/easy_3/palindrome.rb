def palindrome?(input)
  return true if input == input.reverse
  return false if input != input.reverse
end

#p palindrome?("madam i'm adam")
#p palindrome?('356653')
p palindrome?([1, 2, 3, 3, 2, 1])