def outer_method(&block)
  puts "Outer method"
  
  # Pass the block to another method
  inner_method(&block)
end

def inner_method(&block)
  puts "Inner method"
  
  # Call the block
  block.call
end

# Call the outer method with a block
outer_method do
  puts "This is passed to both methods!"
end

# Output:
# Outer method
# Inner method
# This is passed to both methods!
