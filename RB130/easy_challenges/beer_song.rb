=begin
Write a program that can generate the lyrics of the 99 Bottles of Beer song. See the test suite for the entire 
song.

Problem:
  -99 bottles of beer is sing with 100 verses. It begins with 99 vottles and the number of bottles decreses
  with each verse. with the last verse being 'no more' bottles of beer
  -Given we have to produce the lyrics of the song we will have to return a string.


Test cases / Exsamples:
  -Create a BeerSong class with three methods
  -Verse, accepts one argument, a number. The number should present in the verse returned. The return value of this method
  should return a string representing a single verse of the song.
  -Verses accepts 2 number arguments. The first argument is the number verse on which to start, and the second
  argument represents the number verse on which to end. The method should return a string representation all the verses
  in this range 
  -lyrics expects no arguments and returns a string representing the entire song (all 100 verses).

Data Structure:
  -strings
  -integers
  -Array possibly to collect verses

Algorithm:
    -Method Verse:
      -Each line of the verse(there are 2) should be seperated by a new line.
      -All mentions of the number of bottles should be replaced with the methods argument
      -Return the verse string

    -Method Verses
      -the second argument should be less than the first, but greater than or euql to zero
      -The first argument should be less than 100
      -We can start with emoty string or an array to hold our results
      -Count down froim the first argument to the second argument(inclusive)
      -Handle verses that need wither the singular 'bottle' or 'no more' bottles
      -the verse when one bottles starts with 'Take it down' instead of Take one down
      -Add the stringreturn the result as a string

    lyrics
      -Build up a string contianing all 100 verses of the song
      -The verses should count down from 99 to 'no more'
      -Each line of the verses should be seperated by a new line
      -Each unitque vers should be seperated by a blank line
      -Return the full string


=end

class BeerSong
  
  def self.verse(num_bottles)
    bottles_plural_line_one = num_bottles == 1 ? 'bottle' : 'bottles'
    bottles_plural_line_two = num_bottles - 1 == 1 ? 'bottle' : 'bottles'
    line_2_phrase = num_bottles > 1 ? 'Take one down and pass it around' : 'Take it down and pass it around'
    
    if num_bottles == 1
      line_2_phrase_2 = "no more bottles"
    elsif num_bottles == 0
      line_1 = "No more bottles of beer on the wall, no more bottles of beer.\n"
      line_2 = "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
      return "#{line_1}#{line_2}"
    else
      line_2_phrase_2 = "#{num_bottles - 1} #{bottles_plural_line_two}"
    end

    line_1 = "#{num_bottles} #{bottles_plural_line_one} of beer on the wall, #{num_bottles} #{bottles_plural_line_one} of beer.\n" 
    line_2 = "#{line_2_phrase}, #{line_2_phrase_2} of beer on the wall.\n"
    
    "#{line_1}#{line_2}"
  end

  def self.verses(start, ending)
    verses = []

    start.downto(ending) do |bottles|
      verses << verse(bottles)
    end

    verses.join("\n")
  end

  def self.lyrics 
    verses(99, 0)
  end
end

puts BeerSong.verses(99, 98)