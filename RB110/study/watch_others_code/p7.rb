=begin

Algorithm:
  -Set a result variable tp an empty array
  -Split string1 into charrayters


=end


def scramble(str1, str2)
  result = []
  str1.chars.each do |letter|
    result << letter if str2.include?(letter)
  end
  result.size <= str2.size ? false : true
end


p scramble('javaass', 'jjss')
p scramble('rkqodlw', 'world')
p scramble('codewaraarrost', 'codewars')