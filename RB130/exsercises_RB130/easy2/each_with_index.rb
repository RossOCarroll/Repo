def each_with_index(collection)
  counter = 0

  while counter < collection.size
    yield(collection[counter], counter)
    counter += 1
  end
  collection
end



result = each_with_index([1, 3, 6]) do |value, index|
  puts "#{index} -> #{value**index}"
end

puts result == [1, 3, 6]