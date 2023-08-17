def balancer(string)
  return false unless string.count('(') == string.count(')')

  counter = 0

  string.split('').each do |char|
    counter += 1 if char == "("
    counter -= 1 if char == ")"

    return false if counter < 0
  end

  true
end







p balancer("(hi") == false
p balancer("(hi)") == true
p balancer("(()) hi") == true
p balancer(")(") == false
p balancer('(()) )(') == false