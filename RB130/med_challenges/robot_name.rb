#rubocop:disable all
=begin
Write a program that manages robot factory settings.

When robots come off the factory floor, they have no name. The first time you boot them up, a random name is 
generated, such as RX837 or BC811.

Every once in a while, we need to reset a robot to its factory settings, which means that their name gets wiped. 
The next time you ask, it will respond with a new random name.

The names must be random; they should not follow a predictable sequence. Random names means there is a risk of 
collisions. Your solution should not allow the use of the same name twice.

Problem:
  -Robot names are created randomly without input from the user, our program doesnt expect any input argument and
  will return a string
  -A robots name is generated when the robot is first booted up as well as a factory reset.
  -The random;y generated names seems to follow a pattern of 2 uppercase alphabetic characters followed by 3 digits

Test cases / Exsamples:
  -We need to create a Robot class woth 2 methods
    -A method named `name` that returns the robots randomly generated name in a string. The format should be 2
    uppper case alphabetic characters followed by 3 numeric digits.

    -A method named reset that restores the robot to its factory functions. These means that any previosly exsiting
    name for the robot is wiped and a new one is generated.

Data Structure:
  -Strings
  -Array for the collection of current robot names
  -Array for a collect of alphabetic charaters and numeric digits

Algorithm:
  -name method
    -If the robot alreadyt has a name assigned return that name
    -If the robot does not have a name yet:
      -Generate a random name using a helper function
      -Continue generating random names until the class-level collectionbeing used to track names of exisiting
      robots does not include the newly generated name
    -Save the robots new name
    -Sace the name in the class level collection used to track in use names
    -Return name

  -reset method
    -remove the current value of the robots name from the class level collection that tracks the in-use names
    of all exsiting robots
    -remove the exsiting value of the robot's name from the object

  -Helper method to generate name
    -Begin with an empty string
    -Generate 2 random uppercase alphabetic characters and append to the name string
      -A helper method might be useful for generating random letters
    -Gereate three random digitds from 0-9 and append to name string 
    -Return string
=end
#rubocop:enable all

class Robot
  attr_accessor :name

  ALPHABETIC_CHARS = ('A'..'Z').to_a
  NUMERIC_DIGITS = ('1'..'9').to_a

  @@robots = []

  def name
    return @name if @name

    loop do
      new_name = generate_name
      unless @@robots.include?(new_name)
        @name = new_name
        @@robots << @name
        break
      end
    end
    @name
  end

  def reset
    @@robots.delete(@name)
    @name = nil
    name
  end

  def self.display_robots
    @@robots
  end

  private

  def generate_name
    new_name = ''

    new_name += ALPHABETIC_CHARS.sample
    new_name += ALPHABETIC_CHARS.sample
    new_name += NUMERIC_DIGITS.sample
    new_name += NUMERIC_DIGITS.sample
    new_name += NUMERIC_DIGITS.sample

    new_name
  end
end
