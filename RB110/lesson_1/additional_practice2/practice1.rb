flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]
flintstones_hash = {}

flintstones.each_with_index do |key, index|
  flintstones_hash[key] = index
end

puts flintstones_hash