def reduce(array, default_num =  0)
  result = default_num
  counter = 0

  if array.all? {|element| element.class == Integer }
    while array.size > counter
      result = yield(result, array[counter])
      counter += 1
    end
  elsif array.all? {|element| element.class == String }
    result = ''
    while array.size > counter
      result = yield(result, array[counter])
      counter += 1
    end
  elsif array.all? {|element| element.class == Array }
    result = []
    while array.size > counter
      result = yield(result, array[counter])
      counter += 1
    end
  end
  result
end


array = [1, 2, 3, 4, 5]

p reduce(array) { |acc, num| acc + num }                    # => 15
p reduce(array, 10) { |acc, num| acc + num }                # => 25
#reduce(array) { |acc, num| acc + num if num.odd? }        # => NoMethodError: undefined method `+' for nil:NilClass
#

p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']

