File.open('sample.txt', 'w') do |file|
  file.puts "Eiusmod non aute commodo excepteur amet consequat ex elit. Ut excepteur ipsum
enim nulla aliqua fugiat quis dolore do minim non. Ad ex elit nulla commodo
aliqua eiusmod aliqua duis officia excepteur eiusmod veniam. Enim culpa laborum
nisi magna esse nulla ipsum ex consequat. Et enim et quis excepteur tempor ea
sit consequat cupidatat.

Esse commodo magna dolore adipisicing Lorem veniam quis ut labore pariatur quis
aliquip labore ad. Voluptate ullamco aliquip cillum cupidatat id in sint ipsum
pariatur nisi adipisicing exercitation id adipisicing qui. Nulla proident ad
elit dolore exercitation cupidatat mollit consequat enim cupidatat tempor
aliqua ea sunt ex nisi non.

Officia dolore labore non labore irure nisi ad minim consectetur non irure
veniam dolor. Laboris cillum fugiat reprehenderit elit consequat ullamco veniam
commodo."
end



class TextAnalyzer
  def process
    File.open('sample.txt', 'r') do |file|
      yield(file)
      file.close
    end
  end
end

analyzer = TextAnalyzer.new
analyzer.process do |file| 
  paragraph_count = 0
  file.each_line("\n\n") do |paragraph|
    paragraph_count += 1 unless paragraph.strip.empty?
  end
  puts "#{paragraph_count} paragraphs."
end

analyzer.process do |file|
  line_count = 0
  file.each_line do |line|
    line_count += 1 
  end
  puts "#{line_count} lines"
end

analyzer.process do |file|
  word_count = 0
  file.each_line do |line|
    word_count += line.split.size
  end
  puts "#{word_count} words"
end
