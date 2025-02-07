request_line = 'GET /?rolls=2&sides=6 HTTP/1.1'

rolls_sides = request_line.scan(/(?:\?|&)(\w+)=/).flatten
values = request_line.scan(/=(\d+)/).flatten.map(&:to_i)

rolls_sides_hash = {}

rolls_sides.each_with_index do |word, index|
  rolls_sides_hash[word] = values[index]
end


