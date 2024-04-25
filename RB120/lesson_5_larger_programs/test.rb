WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] + # rows
[[1, 4, 7], [2, 5, 8], [3, 6, 9]] + # cols
[[1, 5, 9], [3, 5, 7]]   

squares = {}
(1..9).each {|key| squares[key] = ' '}

squares[3] = 'X'
squares[1] = 'X'


puts squares

WINNING_LINES.each do |line| 
  p *line
end