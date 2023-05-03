def uppercase?(string)
  string.delete('^a-z0-9')
  return true if string == string.upcase
  return false if string != string.upcase
end

p uppercase?('t')
p uppercase?('T')
p uppercase?('Four Score')
p uppercase?('FOUR SCORE')
p uppercase?('4SCORE!')
p uppercase?('')