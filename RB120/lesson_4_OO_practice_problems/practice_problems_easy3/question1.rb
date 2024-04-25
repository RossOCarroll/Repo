class Greeting
  def greet(message)
    puts message
  end
end

class Hello < Greeting
  def self.hi
    greet("Hello")
  end
end

class Goodbye < Greeting
  def bye
    greet("goodbye")
  end
end

hello = Hello.new #This is creating a new object in the Hello class
#hello.hi # this is invoking the hi method defined in the Hello class, in the definition 
#the greet method is invoked with the string "Hello" as an argment. The greet method is
#defined in the Greeting class which is inheirted from the Hello class. In the greet method
#definition the puts method is called on message that is passed to the greet method.

#hello.bye #This will raise an undefined method error as the bye method is only defind in 
#Goodbye class. The hello object doesnt have access to it.

#hello.greet # This will give us an error as the greet method takes an argument and we are not passing
#in a argument in this case.

hello.greet('Goodbye')#He we are passing in an argment "Goodbye" to the greet method. The hello
#object has access tot he greet method because its part of the Hello class which inheirts from 
#The greetgin class.

Hello.hi #An error is raise for an undefined method for the hi. This is because the hi method
#definied for instances of the Hello class rather then the class itself. 



