def spin_me(str)
  str.split.each do |word|
    word.reverse!
  end.join(" ")
end

puts spin_me("hello world") # "olleh dlrow"


In this methos `spin me` the string object passed to it 'hello world' and the 
returned string `"olleh dlrow"` would be the same object. 

As its passed to the method it does not get saved saved anywhere else. We see The
methods split and each called on the object as well as the mutating method `reverse!`.\
The `each` method also returns the same object when it is done iterating.