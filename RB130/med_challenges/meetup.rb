# rubocop:disable all
=begin
Meetups are a great way to meet people who share a common interest. Typically, meetups happen monthly on the same
day of the week. For example, a meetup's meeting may be set as:

The first Monday of January 2021
The third Tuesday of December 2020
The teenth Wednesday of December 2020
The last Thursday of January 2021
In this program, we'll construct objects that represent a meetup date. Each object takes a month number (1-12) 
and a year (e.g., 2021). Your object should be able to determine the exact date of the meeting in the 
specified month and year. For instance, if you ask for the 2nd Wednesday of May 2021, the object should be 
able to determine that the meetup for that month will occur on the 12th of May, 2021.

The descriptors that may be given are strings: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 
'teenth'. The case of the strings is not important; that is, 'first' and 'fIrSt' are equivalent. Note that 
"teenth" is a made up word. There was a meetup whose members realised that there are exactly 7 days that end 
in '-teenth'. Therefore, it's guaranteed that each day of the week (Monday, Tuesday, ...) will have exactly one 
date that is the "teenth" of that day in every month. That is, every month has exactly one "teenth" Monday, 
one "teenth" Tuesday, etc. The fifth day of the month may not happen every month, but some meetup groups like 
that irregularity.

The days of the week are given by the strings 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 
and 'Sunday'. Again, the case of the strings is not important.

Problem:
  -April, June, September, and November have 30 days.
  -February has 28 in most years, but 29 in leap years.
  -All the other months have 31 days.
  -The first day of the week of the month (DOWM) is always between the 1st and 7th of the month.
  -The second DOWM is between the 8th and 14th of the month.
  -The third DOWM is between the 15th and 21st of the month.
  -The fourth DOWM is between the 22nd and 28th of the month.
  -The fifth DOWM is between the 29th and 31st of the month.
  -The last DOWM is between the 22nd and the 31st of the month depending on the number of days in the month.

Test cases / Exsamples:
  -Meetup Class
    -A constructor method that takes two arguments the year and the month

  -a method that determines the date of the meetup in the specified year and month. This method takes an argument
    a day of the week and a schedule descripter and returns a Date object

Data structure:
  -Date objects 

Algorithm:
  -Contructor
    -save the year and the month
    -determine the last day of the month (28-31)

  -Method : day 
    -Convert the weekday and the scedule discripter to lower case
    -Calculate the first possib;e day of the month for the meetup
    -Calculate the last possible day of the month for the meet up
    -Sersarch the range of possible days for the the date4 that occurs on the disired day of the week
    -Return a date object for the first matching day or a value that indicates tha a meetup date couldnt be found
    
=end
# rubocop:enable all

require 'Date'

class Meetup
  attr_accessor :year, :month

  WEEKDAYS = {
    'monday' => 1,
    'tuesday' => 2,
    'wednesday' => 3,
    'thursday' => 4,
    'friday' => 5,
    'saturday' => 6,
    'sunday' => 7
  }

  def initialize(year, month)
    @year = year
    @month = month
  end

  def day(weekday, descriptor)
    weekday = WEEKDAYS[weekday.downcase]
    raise ArgumentError, "Invalid weekday" unless weekday
    descriptor.downcase!

    range = find_range(descriptor)

    range.each do |day|
      begin
        date = Date.new(@year, @month, day)
        return date if date.cwday == weekday
      rescue Date::Error
        next
      end
    end
    nil
  end

  private

  def find_range(descriptor)
    case descriptor
    when 'first' then range = (1..7).to_a
    when 'second' then range = (8..14).to_a
    when 'third' then range = (15..21).to_a
    when 'fourth' then range = (22..28).to_a
    when 'fifth' then range = (29..31).to_a
    when 'last'
      last_day = Date.new(@year, @month, -1).day
      range = (last_day - 6..last_day).to_a
    when 'teenth' then range = (13..19).to_a
    else
      raise ArgumentError, "Invalid descriptor"
    end
    range
  end
end

# meetup = Meetup.new(2013, 3)
# p meetup.day('Monday', 'first')
