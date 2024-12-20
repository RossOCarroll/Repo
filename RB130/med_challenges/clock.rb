=begin
Create a clock that is independent of date.

You should be able to add minutes to and subtract minutes from the time represented by a given Clock object. Note that you should not mutate Clock objects when adding and subtracting minutes -- create a new Clock object.

Two clock objects that represent the same time should be equal to each other.

You may not use any built-in date or time functionality; just use arithmetic operations.

Problem:
  -Our clock objects should track hours and minutes
  -We should be able to add minutes nd subtract minutes from our clock
  -If 2 clock objects have the same hours and minutes they should be concidered equal
  -We may want out clock object to use military time , we do not need to track the date.

Test Cases / Exsamples
  -Clock class
    -A constructor method that accepts two number arguments representing the hours and minutes
    -A class method named 'at' that can create and return a new instance of 'Clock'. If the minutes argment is missing
    the default parameter would be 0  
    -A method that returns the clocks current time as a string
    -Methods that add and subtrack from the current time. These method accept a number of minutes to add or subtract as an argument
    -A methods that compares two clock objects for equality.

Data structure:
  -Strings.. method should convert our clock object into `XX:XX` format
  -integers

Algorithm:
    -Constructor method
      -Save the hours and the minutes
    
    -Class method: 'at'
      -Use the default value of 0 for the minutes if second argument is ommited
      -Call the constructor to create new object
      -Return the new object

    -Method +
      -Compute minutes since midnight for clock object: use helper methods "compute minutes since midnight"
      -Add minutes argument to minutes since midnight
      -While (minutes since midnight >= 24 * 60)
        -subtract 24 * 60 from minutes since midnight

      -Determine time represented by minutes since midnight: use helper methods "compute time from minutes since midnight"
      -return value returned by previous step

    -Method: subtract minutes from clock (-)
      -Compute minutes since midnight for clock object: use helper method "compute minutes since midnight"
      -Subtract minutes argment from minutes since midnight
      -While (minutes since midnight < 0)
        add 24 * 60 
      -Determine time represented by minutes since midnight: use helper method
      -Return value returned by previous step

    -Method: == 
      -If both clock objects have the same hours and minutes return true otherwise return false

    -Method to_s
      -Format hours and minutes as `HH:MM` where they are both 2 digits and leading zeros if nesseary.

    -Helper method: compute hours since midnight
      -Return 60 * hours + minutes where jours and minutes are from the current Clock object

    -Helper method: compute time from minutes since midnight
      -One argument: minutes since midnight
      -See hints for the langueage of your choice
      -Return a new Clock object representing the computed time
=end

class Clock
  attr_reader :hour, :minute

  ONE_DAY = 24 * 60

  def initialize(hour, minute)
    @hour = hour
    @minute = minute
  end

  def self.at(hour, minute=0)
    new(hour, minute)
  end

  def +(add_minutes)
    minutes_since_midnight = compute_minutes_since_midnight + add_minutes
    while minutes_since_midnight >= ONE_DAY
      minutes_since_midnight -= ONE_DAY
    end

    compute_time_from(minutes_since_midnight)
  end

  def -(sub_minutes)
    minutes_since_midnight = compute_minutes_since_midnight - sub_minutes
    while minutes_since_midnight < 0
      minutes_since_midnight += ONE_DAY
    end

    compute_time_from(minutes_since_midnight)
  end

  def ==(other_time)
    hour == other_time.hour && minute == other_time.minute
  end

  def to_s
    format('%02d:%02d', hour, minute);
  end

  private

  def compute_minutes_since_midnight
    total_minutes = 60 * hour + minute
    total_minutes % ONE_DAY
  end

  def compute_time_from(minutes_since_midnight)
    hours, minutes = minutes_since_midnight.divmod(60)
    hours %= 24
    self.class.new(hours, minutes)
  end
end