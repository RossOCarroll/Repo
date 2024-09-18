# #implicitly calling block

# def a_method(num)
#   yield(num)
# end

# a_method(8) {|param| puts "Your number #{param} time 2 is #{param * 2}"}


# def message
#   value = yield
#   p value #blocks hacve a return value
# end

# message { puts 'hello'} # Blocks are dilineated with a do..end or {...}

# #blocks are optional

# #Explicit block parameter

# def other_method(block)
#   block.call
# end

# def a_method(&block)
#   other_method(block)
# end

#a_method { puts "From other_method" }

#binding with a variable

def my_method(proc_object)
  proc_object.call
end

age = 34

my_proc = Proc.new { puts "I am #{age} years old"}

my_method(my_proc)



#binding with a method

# def running 
#   puts "I'm Running"
# end

# def activity(obj)
#   obj.call
# end

# my_proc = Proc.new { running } # running method is part of the binding/context of the my_proc object

# activity(my_proc)


