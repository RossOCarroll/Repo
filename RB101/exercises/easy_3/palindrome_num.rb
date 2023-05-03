def palindromic_number?(number)
  return true if number.to_s == number.to_s.reverse
  return false if number.to_s != number.to_s.reverse
end

p palindromic_number?(34543)
p palindromic_number?(123210)
