def compute(str)
  if block_given?
    yield(str)
  else
    'Does not compute.'
  end
end






# p compute { 5 + 3 } == 8
# p compute { 'a' + 'b' } == 'ab'
# p compute == 'Does not compute.'

p compute('hello') { |str| puts str }
p compute('hi') { |str| puts str }
p compute('dood')
