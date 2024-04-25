class Television
  def self.manufacturer
    # method logic
  end

  def model
    # method logic
  end
end

tv = Television.new
#tv.manufacturer
tv.model

Television.manufacturer
#Television.model

#When the manufacture method is called on the tv object it raises an undefined method error.
#This is because the manufacture method is a class method defined with the self. not an 
#instance method.


#When model is called Television Class we get an error because the model method only
#exsist for an instance of the televison class




