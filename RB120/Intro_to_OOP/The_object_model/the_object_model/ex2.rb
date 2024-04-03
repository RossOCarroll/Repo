
module MyModule
  def my_method(param)
    puts param
  end
end




class MyClass
  include MyModule
end

my_object = MyClass.new
my_object.my_method('Hello')