flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "BamBam"]

flintstones_hsh = {}

flintstones.each_with_index do |person, index|
  flintstones_hsh[person] = index
end 

p flintstones_hsh

