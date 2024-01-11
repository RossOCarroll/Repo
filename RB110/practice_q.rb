def reverse_words(sentence)
  # Your implementation here
end

sample_sentence = 'Hello World'
p reverse_words(sample_sentence) # => 'olleH dlroW'



#####

# You may not use #uniq

def remove_duplicates(array)
  # Your implementation here without using uniq
end

dup_array = [1, 2, 3, 1, 2, 4, 5]
p remove_duplicates(dup_array) # => [1, 2, 3, 4, 5]


####

# you may not use zip

def zip_arrays(arr1, arr2)
  # Your implementation here
end

array1 = [1, 2, 3]
array2 = [4, 5, 6]
p zip_arrays(array1, array2) # => [1, 4, 2, 5, 3, 6]