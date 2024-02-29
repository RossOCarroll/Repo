=begin

# # Write a function, negate, that converts all "yes" words to "no" and "no" words to "yes" in a sentence. 
The comparison for "yes" and "no" should be case insensitive."yes" and "no" should be negated even if ending with 
., ?, ,, or !. 


Input:
  -A string sentence

Output:
  -The same string sentence with all the 'Yes' words changed to 'no' and all the 'no' words changed to 'yes'

Rules:
  Explicit:
    -Should be case insensetive
    -Should be negated even if followed by puncuation
  Implicit:
    -If there is no 'yes' or 'no' words input return the same sentence

Questions

    -Do we return the same string? or a new string?

Test Cases // Exsamples

# puts negate("Yes, I said no but now I say yes.") # "No, I said yes but now I say no."
# puts negate("no way, yes way!") # "yes way, no way!"
# puts negate("Yesterday is not today?") # "Yesterday is not today?"
# puts negate("No, I do not know!") # "Yes, I do not know!"

Data Structure:
  -String

Assisting Structure
  -An array

Algorithm:
  -Split the input sting into an array
  -Iterate over the array 
    -For each word
      -Check if the character at index - 1 is punctuation
        -If true save that chacter
        -Add tail when replacing

    -If the word is 'Yes'
      -Repace word with 'No'
    -If word is ' No'
      -Replace with 'Yes' 
    -if word is 'no'
      -Replace with 'yes'

  -return sentence

=end


def negate(sentence)
  new_sentence = []

  sentence.split.each do |word|
    tail = word[-1].match?(/[,.!?]/) ? word[-1] : ''

    word_without_tail = word.chomp(tail)
    
    case word_without_tail.downcase
    when 'no' then word_without_tail = 'Yes'
    when 'yes' then word_without_tail = 'No'
    else word_without_tail
    end

    new_sentence << word_without_tail.capitalize + tail
  end

  new_sentence.join(' ')
end


p negate("Yes, I said no but now I say yes.") # "No, I said yes but now I say no."
# puts negate("no way, yes way!") # "yes way, no way!"
# puts negate("Yesterday is not today?") # "Yesterday is not today?"
# puts negate("No, I do not know!") # "Yes, I do not know!"