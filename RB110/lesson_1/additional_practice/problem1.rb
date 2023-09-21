flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

flintstones_order = {}

flintstones.each_with_index do |name, index|
  flintstones_order[name] = index
end

puts flintstones_order