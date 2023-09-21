[1, 2, 3].any? do |num|
  num > 2
end

{a: "ant", b: "bear", c: "cast"}.any? do |key, value|
  value.size > 4
end

[1, 2, 3].all? do |num|
  num > 2
end

{a: "ant", b: "bear", c: "cat"}.all? do |key, value|
  value.length >= 3
end

[1, 2, 3].each_with_index do |num, index|
  puts "The index of #{num} is #{index}"
end

{a: "ant", b: "bear", c: "cat"}.each_with_index do |pair, index|
  puts "The index of #{pair} is #{index}"
end

[1, 2, 3].each_with_object([]) do |num, array|
  array << num if num.odd?
end

[1, 2, 3].partition do |num|
  num.odd?
end

odd, even = [1, 2, 3].partition do |num|
  num.odd?
end
